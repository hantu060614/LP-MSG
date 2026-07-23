import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PageSeo from "./components/PageSeo.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const About = lazy(() => import("./pages/About.jsx"));
const Business = lazy(() => import("./pages/Business.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const News = lazy(() => import("./pages/News.jsx"));
const NewsDetail = lazy(() => import("./pages/NewsDetail.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const UnitDetail = lazy(() => import("./pages/UnitDetail.jsx"));

function RouteFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-white text-zinc-600"
      role="status"
      aria-live="polite"
    >
      Memuat…
    </div>
  );
}

/** Serve /about without trailing slash — strip slash for React Router. */
function StripTrailingSlash({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    if (pathname.length > 1 && pathname.endsWith("/")) {
      navigate(`${pathname.replace(/\/+$/, "")}${search}${hash}`, {
        replace: true,
      });
    }
  }, [location, navigate]);

  return children;
}

export default function App() {
  return (
    <Router>
      <StripTrailingSlash>
        <PageSeo />
        <a
          href="#main-content"
          className="absolute left-[-10000px] top-4 z-[100] rounded-md bg-[#D90429] px-4 py-2 text-sm font-semibold text-white focus:left-4"
        >
          Langsung ke konten utama
        </a>
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-white font-['Plus_Jakarta_Sans',sans-serif] text-zinc-900 antialiased">
          <Navbar />
          <main id="main-content" className="flex-grow">
            <Suspense fallback={<RouteFallback />}>
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </StripTrailingSlash>
    </Router>
  );
}
