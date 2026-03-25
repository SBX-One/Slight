import cargoVideo from '../../assets/Videos/cargo.mp4';
import DemoSwipers from './DemoSwipers';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function NdHero() {
    useEffect(() => {
            AOS.init({
                duration: 800,
                once: true,
            });
        }, []);
    return (
        <div>
            <div className=" relative overflow-hidden ">
                <div className="relative w-screen  overflow-hidden pt-[186px] sm:pt-[226px] lg:pt-[280px]">
                    <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" src={cargoVideo} autoPlay muted loop playsInline />

                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r lg:to-white/30 from-white  to-white/90 z-0" />
                    <div className="absolute hidden lg:block inset-0 bg-gradient-to-t lg:bg-gradient-to-r lg:to-white/30 from-white  to-white/90 z-0" />

                    <div className="relative z-10">
                        <div className="lg:grid lg:grid-cols-7">
                            <div className="contentPadding  flex flex-col gap-36  lg:col-span-7">
                                <div className="text-center flex flex-col gap-10">
                                    <p className="title-2 sm:title-1 " data-aos="fade-up">
                                        Latest News & <br className="lg:hidden" /> Insights
                                    </p>
                                    <p className="paragraph-2 sm:text-base" data-aos="fade-up" >
                                        Stay ahead with in-depth reports, on-chain data, and SLIGHT’s official announcements.
                                    </p>

                                    <div className="flex flex-col gap-5 items-center button-xs " data-aos="fade-up" data-aos-delay="200">
                                        <button className="primaryButton w-fit">
                                            <div className="flex gap-3 ">
                                                <p>View Latest</p>
                                                <p>→</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-10 lg:mb-0 " data-aos="fade-up" data-aos-delay="400">
                                    <DemoSwipers order={[0, 4, 8]} active={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
