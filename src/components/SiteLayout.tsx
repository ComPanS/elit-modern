import { Outlet } from 'react-router-dom'

export function SiteLayout() {
  return (
    <div className="site-shell"><Outlet /></div>
  )
}
