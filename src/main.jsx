import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Search } from "./pages/Search/Search.jsx";
import Home from "./pages/Home/Home.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement : <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/",
        element: <Search/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyled/>
    <RouterProvider router={router}/>
  </StrictMode>
);
