import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// Minimal path-based routing (no router dependency). The public landing page
// is the default. The internal ads dashboard lives at /ads-dashboard, is NOT
// linked anywhere (reachable only by typing the URL), and is lazy-loaded so its
// code + CSS never touch the public landing page bundle.
const AdsDashboard = lazy(() => import('./ads/AdsDashboard.jsx'))
const path = window.location.pathname.replace(/\/+$/, '')
const isAdsDashboard = path === '/ads-dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isAdsDashboard ? (
      <Suspense fallback={<div style={{ padding: 40, fontFamily: 'sans-serif' }}>טוען…</div>}>
        <AdsDashboard />
      </Suspense>
    ) : (
      <App />
    )}
  </React.StrictMode>,
)
