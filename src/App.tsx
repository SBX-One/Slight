import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BaseLayout from './Layout/baseLayout';
import TeamUp from './pages/TeamUp';
import NewDocs from './pages/NewDocs';
import SectorDevision from './pages/SectorDevision';

function App() {
    return (
        <BrowserRouter>
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
