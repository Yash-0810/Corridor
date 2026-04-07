import { useEffect, useRef } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import FloatingCTA from "./components/FloatingCTA";

function App() {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) return; // Prevent double init in StrictMode

    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    rafRef.current = (time) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(rafRef.current);
    };

    requestAnimationFrame(rafRef.current);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <div className="App bg-black min-h-screen">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" />
      
      <BrowserRouter>
        <Navbar />
        <FloatingCTA />
<ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
