import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { Gallery } from './pages/gallery';
import { PrivateRoute } from './components/PrivateRoute';
import { GalleryProvider } from './contexts/GalleryContext';

export function App() {
  return (
    <BrowserRouter>
      <GalleryProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/gallery"
            element={
              <PrivateRoute>
                <Gallery />
              </PrivateRoute>
            }
          />
        </Routes>
      </GalleryProvider>
    </BrowserRouter>
  );
}