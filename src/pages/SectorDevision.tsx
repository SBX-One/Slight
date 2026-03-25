import Marquee from '../components/Home/Marque';
import SectorHero from '../components/SectorDevision/SectorHero';
import SectorSecond from '../components/SectorDevision/SectorSecond';
import SectorThird from '../components/SectorDevision/SectorThird';

function SectorDevision() {
    return (
        <div className="text-secondary">
            <SectorHero />
            <SectorSecond />

            <Marquee/>

            <SectorThird />
        </div>
    );
}

export default SectorDevision;
