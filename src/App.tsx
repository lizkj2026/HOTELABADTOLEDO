/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoomsPage from './pages/RoomsPage';
import GiftVouchersPage from './pages/GiftVouchersPage';
import AgendaPage from './pages/AgendaPage';
import GalleryPage from './pages/GalleryPage';
import OffersPage from './pages/OffersPage';
import ActivitiesPage from './pages/ActivitiesPage';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';
import BookingBar from './components/BookingBar';
import ContactWidgets from './components/ContactWidgets';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative selection:bg-brand-gold selection:text-brand-charcoal">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habitaciones" element={<RoomsPage />} />
            <Route path="/apartamentos" element={<RoomsPage />} />
            <Route path="/bonos-regalo" element={<GiftVouchersPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/ofertas" element={<OffersPage />} />
            <Route path="/actividades" element={<ActivitiesPage />} />
            <Route path="/book" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
        <BookingBar />
        <ContactWidgets />

        {/* Floating Urgency Tag */}
        <div className="fixed bottom-32 right-8 z-[100] hidden md:block">
          <div className="glass px-6 py-3 rounded-full flex items-center gap-3 shadow-xl">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            <span className="text-[10px] uppercase letter-spacing-wide font-bold text-brand-charcoal">3 personas viendo ahora</span>
          </div>
        </div>
      </div>
    </Router>
  );
}

