import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// Minimal path-based routing (no router dependency). The public landing page
// is the default. Internal pages (ads dashboard, creative kit) are NOT linked
// anywhere — reachable only by typing the URL — and are lazy-loaded so their
// code + CSS never touch the public landing page bundle.
const AdsDashboard = lazy(() => import('./ads/AdsDashboard.jsx'))
const CreativeKit = lazy(() => import('./creative-kit/CreativeKit.jsx'))

const path = window.location.pathname.replace(/\/+$/, '')

let root
if (path === '/ads-dashboard') {
  root = (
    <Suspense fallback={<div style={{ padding: 40, fontFamily: 'sans-serif' }}>טוען…</div>}>
      <AdsDashboard />
    </Suspense>
  )
} else if (path === '/creative-kit') {
  root = (
    <Suspense fallback={<div style={{ padding: 40, fontFamily: 'sans-serif' }}>טוען…</div>}>
      <CreativeKit />
    </Suspense>
  )
} else {
  root = <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{root}</React.StrictMode>,
)
