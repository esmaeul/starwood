import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrPage from "./routes/ErrPage.jsx";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Projects from "./routes/Projects.jsx";
import Contact from "./routes/Contact.jsx";
import Activities from "./routes/Activities.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </StrictMode>
);
