import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ScrollManager from "./ScrollManager";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
