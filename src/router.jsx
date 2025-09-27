import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Popular } from "./pages/Popular";
import Tendency from "./pages/Tendency";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter([
  { Component: MainLayout, children:
    [
      { path: "/", Component: HomePage },
      { path: "/about", Component: AboutPage },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/popular", Component: Popular },
      { path: "/tendency", Component: Tendency },
    ]
  },
]);

export default router
