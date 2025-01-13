import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrPage from "./routes/ErrPage.jsx";
import Root from "./routes/Root.jsx";
// import Index from "./routes/Index.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Projects from "./routes/Projects.jsx";
import Contact from "./routes/Contact.jsx";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
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
