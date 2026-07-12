import { useLocalStorage } from './useLocalStorage'
import { aggregate, deriveRow, rowStatus, num, fmt } from './calc'
import { CREATIVE_ANGLES, emptyRow } from './adsData'
import KpiCard from './KpiCard'
import PerformanceTable from './PerformanceTable'
import CreativeCard from './CreativeCard'
import CreativeLibrary from './CreativeLibrary'
import DecisionRules from './DecisionRules'
import FunnelChecklist from './FunnelChecklist'
import './AdsDashboard.css'

const makeId = () => 'r' + Date.now().toString(36) + Math.floor(Math.random() * 1000)

/** CSV-escape a single cell. */
function csvCell(v) {
  const s = v === null || v === undefined ? '' : String(v)
  return `"${s.replace(/"/g, '""')}"`
}

/** Round a nullable number for CSV output; null → ''. */
function csvNum(v, digits = 2) {
  return v === null || v === undefined ? '' : Number(v).toFixed(digits)
}

export default function AdsDashboard() {
  const [rows, setRows] = useLocalStorage('profitBoostAdsRows', [])
  const [creatives, setCreatives] = useLocalStorage('profitBoostAdsCreatives', {})
  const [checked, setChecked] = useLocalStorage('profitBoostAdsChecklist', {})

  const agg = aggregate(rows)

  // ---- Table handlers ----
  const addRow = () => setRows((r) => [...r, emptyRow(makeId())])
  const updateRow = (id, field, value) =>
    setRows((r) => r.map((row) => (row.id === id ? { ...row, [field]: value } : row)))
  const deleteRow = (id) => setRows((r) => r.filter((row) => row.id !== id))
  const resetRows = () => {
    if (window.confirm('לאפס את כל נתוני הטבלה? פעולה זו לא ניתנת לביטול.')) setRows([])
  }

  // ---- Creative handlers ----
  const updateCreative = (id, field, value) =>
    setCreatives((c) => ({ ...c, [id]: { ...c[id], [field]: value } }))

  // ---- Checklist ----
  const toggleChecked = (id) => setChecked((c) => ({ ...c, [id]: !c[id] }))

  // ---- CSV export ----
  const exportCSV = () => {
    const headers = [
      'תאריך', 'קמפיין', 'אדסט', 'קריאייטיב', 'הוצאה', 'חשיפות', 'קליקים',
      'צפיות בדף נחיתה', 'התחלת תשלום', 'רכישות', 'הכנסות', 'CPA', 'ROAS',
      'CTR (%)', 'סטטוס', 'הערות',
    ]
    const lines = rows.map((row) => {
      const d = deriveRow(row)
      const status = rowStatus(row).label
      return [
        row.date, row.campaign, row.adset, row.creative,
        csvNum(num(row.spend), 2), num(row.impressions), num(row.clicks),
        num(row.landingViews), num(row.initiateCheckout), num(row.purchases),
        csvNum(d.revenue, 0), csvNum(d.cpa, 2), csvNum(d.roas, 2), csvNum(d.ctr, 2),
        status, row.notes,
      ].map(csvCell).join(',')
    })
    // Prepend BOM so Excel reads Hebrew UTF-8 correctly.
    const csv = '﻿' + [headers.map(csvCell).join(','), ...lines].join('\r\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'profit-boost-ads.csv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const profitTone = agg.profit > 0 ? 'good' : agg.profit < 0 ? 'bad' : 'neutral'

  return (
    <div className="ads-dashboard" dir="rtl">
      <div className="ads-container">
        {/* 1. Header */}
        <header className="ads-header">
          <h1 className="ads-header__title">דשבורד ממומן — Profit Boost</h1>
          <p className="ads-header__subtitle">
            מעקב יומי אחרי קריאייטיבים, תקציב, רכישות ועלות רכישה
          </p>
          <p className="ads-header__note">הנתונים מוזנים ידנית מתוך Meta Ads Manager.</p>
        </header>

        {/* 2. KPI cards */}
        <section className="kpi-grid">
          <KpiCard label="סה״כ הוצאה" value={fmt.money(agg.spend)} tone="gold" />
          <KpiCard label="סה״כ רכישות" value={fmt.int(agg.purchases)} tone="gold" />
          <KpiCard label="הכנסות" value={fmt.money(agg.revenue)} tone="good" />
          <KpiCard label="רווח (לפני עלויות נוספות)" value={fmt.money(agg.profit)} tone={profitTone} />
          <KpiCard label="עלות רכישה ממוצעת (CPA)" value={fmt.money2(agg.cpa)} hint="הוצאה ÷ רכישות" />
          <KpiCard label="ROAS" value={fmt.ratio(agg.roas)} hint="הכנסות ÷ הוצאה" />
          <KpiCard label="CTR ממוצע" value={fmt.pct(agg.ctr)} hint="קליקים ÷ חשיפות" />
          <KpiCard label="המרה דף → רכישה" value={fmt.pct(agg.lpCvr)} hint="רכישות ÷ צפיות בדף" />
        </section>

        {/* 3. Daily performance table */}
        <PerformanceTable
          rows={rows}
          onChange={updateRow}
          onAdd={addRow}
          onDelete={deleteRow}
          onReset={resetRows}
          onExport={exportCSV}
        />

        {/* 4. Creative performance cards */}
        <section className="ads-section">
          <div className="ads-section__head">
            <div>
              <h2 className="ads-section__title">ביצועי קריאייטיבים</h2>
              <p className="ads-section__lead">הוצאה ורכישות לכל זווית — CPA וסטטוס מחושבים אוטומטית.</p>
            </div>
          </div>
          <div className="creative-grid">
            {CREATIVE_ANGLES.map((angle) => (
              <CreativeCard
                key={angle.id}
                angle={angle}
                data={creatives[angle.id]}
                onChange={updateCreative}
              />
            ))}
          </div>
        </section>

        {/* 5. Creative library */}
        <CreativeLibrary />

        {/* 6. Decision rules */}
        <DecisionRules />

        {/* 7. Funnel checklist */}
        <FunnelChecklist checked={checked} onToggle={toggleChecked} />

        {/* 9. Future Meta API note */}
        <p className="ads-future-note">
          בעתיד אפשר לחבר את הדשבורד ל־Meta Marketing API / Ads Insights API כדי למשוך נתונים
          אוטומטית. בשלב ההשקה הנתונים מוזנים ידנית.
        </p>
      </div>
    </div>
  )
}
