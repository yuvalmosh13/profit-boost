/* =====================================================================
 *  Safe calculation helpers for the ads dashboard.
 *  Never returns NaN / Infinity. When a value cannot be computed
 *  (e.g. divide by zero, empty field), returns null so the UI can
 *  render "—" instead.
 * ===================================================================== */

export const PRICE = 97 // Profit Boost price in ₪ (revenue = purchases * PRICE)

/** Parse any field to a finite number; empty / invalid → 0. */
export function num(v) {
  if (v === '' || v === null || v === undefined) return 0
  const n = typeof v === 'number' ? v : parseFloat(String(v).replace(',', '.'))
  return Number.isFinite(n) ? n : 0
}

/** Safe divide. Returns null when denominator is 0 (→ shown as "—"). */
export function safeDiv(a, b) {
  const bb = num(b)
  if (bb === 0) return null
  const r = num(a) / bb
  return Number.isFinite(r) ? r : null
}

/** Format a value or "—" when null/undefined. */
function orDash(value, formatter) {
  if (value === null || value === undefined) return '—'
  return formatter(value)
}

export const fmt = {
  money: (v) => orDash(v, (n) => `₪ ${n.toLocaleString('he-IL', { maximumFractionDigits: 0 })}`),
  money2: (v) => orDash(v, (n) => `₪ ${n.toLocaleString('he-IL', { maximumFractionDigits: 1 })}`),
  int: (v) => orDash(v, (n) => n.toLocaleString('he-IL', { maximumFractionDigits: 0 })),
  ratio: (v) => orDash(v, (n) => `${n.toFixed(2)}x`),
  pct: (v) => orDash(v, (n) => `${n.toFixed(2)}%`),
}

/**
 * Derive the calculated metrics for a single daily row.
 * All divisions are safe (null when not computable).
 */
export function deriveRow(row) {
  const spend = num(row.spend)
  const impressions = num(row.impressions)
  const clicks = num(row.clicks)
  const landingViews = num(row.landingViews)
  const purchases = num(row.purchases)

  const revenue = purchases * PRICE
  const cpa = safeDiv(spend, purchases)
  const roas = spend === 0 ? null : safeDiv(revenue, spend)
  const ctr = safeDiv(clicks * 100, impressions) // percentage
  const lpCvr = safeDiv(purchases * 100, landingViews) // percentage

  return { spend, impressions, clicks, landingViews, purchases, revenue, cpa, roas, ctr, lpCvr }
}

/**
 * Status badge logic for a daily row (per spec). Priority ordered so the
 * most actionable message wins when several conditions overlap.
 */
export function rowStatus(row) {
  const spend = num(row.spend)
  const impressions = num(row.impressions)
  const clicks = num(row.clicks)
  const purchases = num(row.purchases)

  // No data entered yet.
  if (spend === 0 && impressions === 0 && clicks === 0 && purchases === 0) {
    return { label: 'בהמתנה', tone: 'idle' }
  }

  const cpa = purchases > 0 ? spend / purchases : null
  const ctr = impressions > 0 ? (clicks / impressions) * 100 : null

  if (purchases > 0 && cpa !== null && cpa <= 40) {
    return { label: 'שווה להמשיך', tone: 'good' }
  }
  if (spend > PRICE && purchases === 0) {
    return { label: 'לכבות או לשנות', tone: 'bad' }
  }
  if (clicks > 30 && purchases === 0) {
    return { label: 'לבדוק דף / הצעה', tone: 'warn' }
  }
  if (ctr !== null && ctr < 0.7) {
    return { label: 'לשפר קריאייטיב', tone: 'warn' }
  }
  // Active but no specific rule triggered.
  return { label: 'במעקב', tone: 'neutral' }
}

/** Aggregate KPIs across all rows. */
export function aggregate(rows) {
  const totals = rows.reduce(
    (acc, r) => {
      acc.spend += num(r.spend)
      acc.impressions += num(r.impressions)
      acc.clicks += num(r.clicks)
      acc.landingViews += num(r.landingViews)
      acc.purchases += num(r.purchases)
      return acc
    },
    { spend: 0, impressions: 0, clicks: 0, landingViews: 0, purchases: 0 }
  )

  const revenue = totals.purchases * PRICE
  return {
    ...totals,
    revenue,
    profit: revenue - totals.spend,
    cpa: safeDiv(totals.spend, totals.purchases),
    roas: totals.spend === 0 ? null : safeDiv(revenue, totals.spend),
    ctr: safeDiv(totals.clicks * 100, totals.impressions),
    lpCvr: safeDiv(totals.purchases * 100, totals.landingViews),
  }
}
