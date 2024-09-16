import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Search } from "./pages/Search/Search.jsx";
import Home from "./pages/Home/Home.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import { Authentication } from "./pages/Authentication/Authentication";
import { Profile } from "./pages/Profile/Profile.jsx";
import UserProvider from "./Context/UserContext.jsx";
import { ManageNews } from "./pages/ManageNews/ManageNews.jsx";
import { ManageUser } from "./pages/ManageUser/ManageUser.jsx";
import { NewsPage } from "./pages/NewsPage/NewsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", //endereço da rota 
    element: <Navbar />, //rota mãe
    errorElement : <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/manage-news/:action/:id",
        element: <ManageNews/>
      },
      {
        path: "/manage-user/:action/:id",
        element: <ManageUser/>
      },
      {
        path: "/news/:id",
        element: <NewsPage/>
      }
    ],
  },
  {
    path: "/auth",
    element: <Authentication/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyled/>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>
);
