import Hero from '../components/Home/hero';
import Second from '../components/Home/Second';
import Third from '../components/Home/Third';
import Fourth from '../components/Home/Fourth';
import Fifth from '../components/Home/Fifth';
import img1 from '../assets/imgs/Partner.png';
import logos from '../assets/imgs/Frame 51.png';
import vimgae from '../assets/imgs/Group v.png';
import Marquee from '../components/Home/Marque';

function Home() {
    return (
        <div className="text-secondary flex flex-col gap-50 md:gap-40 lg:gap-30">
            <Hero />

            <Marquee />
            <Second />

            <Third />

            <Fourth />
            <div className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
                <Fifth />
            </div>

            <div className="hidden lg:block relative my-30 p-20 overflow-hidden">
                <img src={img1} alt="" className="absolute top-0 left-0 -z-10 w-full h-full" />
                <div className="absolute w-full h-full bg-secondary/60 top-0 left-0"></div>
                <div className="py-20 relative px-10 bg-white rounded-4xl">
                    <img src={vimgae} alt="" className="absolute top-0 translate-x-1/2 left-0 z-10" />
                    <div>
                        <div className="flex flex-col gap-20">
                            <p className="title-1-medium">Partners & Investors</p>
                            <hr />
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="col-start-2 pt-10">
                                We’re teaming up with the best in maritime, finance, and tech to open new horizons for investment. With the support of our partners and investors. we’re driving the
                                industry forward, bringing innovation and creating unique opportunities for growth.
                            </p>
                        </div>
                    </div>

                    <div className="pt-28">
                        <img src={logos} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
