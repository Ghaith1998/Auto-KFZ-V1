import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import AgbPage from "./pages/AgbPage";
import ScrollManager from "./ScrollManager";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/agb" element={<AgbPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
