import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import styles from "./App.module.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <div className={styles.content}>
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
