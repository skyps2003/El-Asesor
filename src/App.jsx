import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import { LocationProvider } from './context/LocationContext';

const Servicios = lazy(() => import('./pages/Servicios'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Terminos = lazy(() => import('./pages/Terminos'));
const Privacidad = lazy(() => import('./pages/Privacidad'));

// This component ensures the page scrolls to the top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to the top without smooth animation to avoid visual glitches during page transitions
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-bgmain flex items-center justify-center text-primary font-medium tracking-widest text-sm uppercase">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path="servicios" element={<Servicios />} />
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="terminos" element={<Terminos />} />
              <Route path="privacidad" element={<Privacidad />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;
