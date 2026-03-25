import cargoVideo from '../../assets/Videos/cargo.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function SectorHero() {
    useEffect(() => {
            AOS.init({
                duration: 800,
                once: true,
            });
        }, []);
    return (
        <div>
            <div className=" relative overflow-hidden ">
                <div className="relative w-screen overflow-hidden pt-[186px] sm:pt-[226px] lg:pt-[280px]">
                    {/* Background Video */}
                    <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" src={cargoVideo} autoPlay muted loop playsInline />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r lg:to-white/30 from-white  to-white/90 z-0" />
                    <div className="absolute hidden lg:block inset-0 bg-gradient-to-t lg:bg-gradient-to-r lg:to-white/30 from-white  to-white/90 z-0" />

                    <div className="relative z-10">
                        <div className="lg:grid lg:grid-cols-7">
                            <div className="contentPadding h-[90dvh]  lg:col-span-4 ">
                                <div className="text-center flex flex-col gap-10 lg:text-left" data-aos="fade-up">
                                    <p className="title-2 sm:title-1 ">Explore Our Investable Maritime Sectors</p>
                                    <p className="paragraph-2 sm:text-base">From vessel operations to sustainable fuels choose your path in the maritime economy</p>

                                    <div className="flex flex-col gap-5 items-center button-xs lg:items-start">
                                        <button className="primaryButton w-fit">
                                            <div className="flex gap-3 ">
                                                <p>Be The One Of Us</p>
                                                <p>→</p>
                                            </div>
                                        </button>
                                        {/* <button className="text-secondary/40">Learn more</button> */}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 lg:flex py-20" data-aos="fade-up" data-aos-delay="600">
                                    <div className="flex gap-5  justify-end pr-5 items-center">
                                        <p className="heading-2 sm:text-4xl">
                                            100 <span className="text-primary">+</span>
                                        </p>
                                        <p className="sub-2 text-secondary/20">
                                            Companies <br /> Choosed
                                        </p>
                                    </div>
                                    <div className="flex gap-5 justify-start pl-5 items-center border-l border-secondary/10">
                                        <p className="heading-2 sm:text-4xl">
                                            44 <span className="text-primary"> +</span>
                                        </p>
                                        <p className="sub-2 text-secondary/20">Countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
