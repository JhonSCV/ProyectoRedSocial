import { Outlet } from 'react-router-dom';

export const NavbarApp = () => {
  return (
    <>
      <div className="relative h-screen w-screen bg-gradient-to-b from-cyan-950 to-slate-950">
        <Outlet />
      </div>
    </>
  )
}
