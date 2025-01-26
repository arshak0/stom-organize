import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './pages/Homepage/Homepage.tsx'
import SectionPage from './pages/SectionPage/SectionPage.tsx'
import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/section_page" element={<SectionPage />} />
    </Routes>
  </BrowserRouter>
);
