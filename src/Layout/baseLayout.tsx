import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';

function BaseLayout() {
    return (
        <div className="min-h-screen flex flex-col justify-between relative">
            <div className="absolute z-50 w-full ">
                <Navbar />
            </div>
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default BaseLayout;
