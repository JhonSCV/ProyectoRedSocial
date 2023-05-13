import { Outlet, useNavigate } from "react-router-dom"
import { logout } from "../store/slices/auth/AuthSlice";
import { useDispatch } from "react-redux";

export const NavigatorPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToNavigate = (e) => {
    navigate(e.target.name);
  }

  const logOut = () => {
    dispatch(logout());
    console.log("Saliendo del Navigator...");
    navigate("/");
  }

  return (
    <>
        <div className="relative block align-sub w-11/12 m-auto p-2.5 h-10 bg-neutral-100 rounded-3xl text-center">
            <button name="publications" onClick={ (e) => goToNavigate(e)} className="relative focus:border-t-4 focus:border-cyan-500 hover:w-9 hover:h-9 hover:border-2 hover:border-slate-800 hover:rounded-md transition-all bottom-2 m-auto w-8 h-8 bg-publications-icon bg-cover bg-no-repeat" />
            <button name="chat" onClick={ (e) => goToNavigate(e)} className="relative focus:border-t-4 focus:border-cyan-500 hover:w-9 hover:h-9 hover:border-2 hover:border-slate-800 hover:rounded-md transition-all bottom-2 m-auto w-8 h-8 bg-chat-icon bg-cover bg-no-repeat" />
            <button onClick={ (e) => logOut(e)} className="absolute hover:w-9 hover:h-9 hover:bottom-0.5 m-auto transition-all bottom-1 right-4 w-8 h-8 bg-logout-icon bg-contain" />
        </div>
        
        <Outlet />
    </>
  )
}
