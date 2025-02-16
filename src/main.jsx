import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n";
import ErrPage from "./routes/ErrPage.jsx";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Decorations from "./routes/Decorations.jsx";
import Projects from "./routes/Projects.jsx";
import Careers from "./routes/Careers.jsx";
import Services from "./routes/Services.jsx";
import InteriorDesign from "./routes/services/InteriorDesign.jsx";
import InteriorDecorations from "./routes/services/InteriorDecorations.jsx";
import ExteriorDecorations from "./routes/services/ExteriorDecorations.jsx";
import ArchitecturalWork from "./routes/services/ArchitecturalWork.jsx";
import Doors from "./routes/services/Doors.jsx";
import InteriorDoors from "./routes/services/doors/InteriorDoors.jsx";
import ExteriorDoors from "./routes/services/doors/ExteriorDoors.jsx";
import PalaceAndResidential from "./routes/services/doors/PalaceAndResidential.jsx";
import OfiiceAndCorpotate from "./routes/services/doors/OfiiceAndCorpotate.jsx";
import StagesAndPlatforms from "./routes/services/doors/StagesAndPlatforms.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { MotionProvider } from "./context/MotionContext.jsx";

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
        path: "/services",
        element: <Services />,
      },
      // Start Services Routes
      {
        path: "/interior-design",
        element: <InteriorDesign />,
      },
      {
        path: "/interior-decorations",
        element: <InteriorDecorations />,
      },
      {
        path: "/exterior-decorations",
        element: <ExteriorDecorations />,
      },
      {
        path: "/doors",
        element: <Doors />,
      },
      // Start Doors Routes
      {
        path: "/doors",
        element: <Doors />,
      },
      {
        path: "/interior-doors",
        element: <InteriorDoors />,
      },
      {
        path: "/exterior-doors",
        element: <ExteriorDoors />,
      },
      {
        path: "/palace-and-residential-doors",
        element: <PalaceAndResidential />,
      },
      {
        path: "/office-and-corporate-doors",
        element: <OfiiceAndCorpotate />,
      },
      // End Doors Routes
      {
        path: "/stages-and-platforms",
        element: <StagesAndPlatforms />,
      },
      {
        path: "/architectural-work",
        element: <ArchitecturalWork />,
      },
      // End Services Routes
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/decorations",
        element: <Decorations />,
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
    <LanguageProvider>
      <MotionProvider>
        <RouterProvider router={router}>
          <Root />
        </RouterProvider>
      </MotionProvider>
    </LanguageProvider>
  </StrictMode>
);
