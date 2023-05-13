import { Routes, Route } from "react-router-dom";
import { ChatPage, NavigatorPage, PublicationsPage } from "../pages/index";

export const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <NavigatorPage />}>
          <Route path="chat" element={ <ChatPage /> }/>
          <Route path="publications" element={ <PublicationsPage /> }/>
        </Route>
      </Routes>
    </>
  )
}
