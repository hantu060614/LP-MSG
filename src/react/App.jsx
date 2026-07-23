import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./About";
import Business from "./pages/Business";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import UnitDetail from "./pages/UnitDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white text-zinc-900 antialiased overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/unit/:id" element={<UnitDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
