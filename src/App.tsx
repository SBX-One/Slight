import { Route, Routes, BrowserRouter, Navigate, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import AOS from 'aos';
import BaseLayout from './Layout/baseLayout';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TeamUp = lazy(() => import('./pages/TeamUp'));
const NewDocs = lazy(() => import('./pages/NewDocs'));
const SectorDevision = lazy(() => import('./pages/SectorDevision'));

function ScrollToTopAndAOS() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }, [location]);

    return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTopAndAOS />
            <Suspense fallback={<div className="min-h-screen bg-white" />}>
                <Routes>
                    <Route element={<BaseLayout />}>
                        <Route path="/new&docs" element={<NewDocs/>} />
                        <Route path="/teamup" element={<TeamUp />} />
                        <Route path="/sectordevision" element={<SectorDevision />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
