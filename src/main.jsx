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
        element: <Profile></Profile>
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
