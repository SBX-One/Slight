import TeamHero from '../components/TeamUp/TeamHero';
import TeamSecond from '../components/TeamUp/TeamSecond';
import TeamThird from '../components/TeamUp/TeamThird';

function TeamUp() {
    return (
        <div className="text-secondary">
            <TeamHero />

            <TeamSecond />

            <TeamThird />
        </div>
    );
}

export default TeamUp;
