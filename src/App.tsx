import { Route, Routes, BrowserRouter, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BaseLayout from './Layout/baseLayout';
import TeamUp from './pages/TeamUp';
import NewDocs from './pages/NewDocs';
import SectorDevision from './pages/SectorDevision';

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
        </BrowserRouter>
    );
}

export default App;
