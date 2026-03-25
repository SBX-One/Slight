import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import cargoVideo from '../../assets/Videos/cargo.mp4';
import img1 from '../../assets/imgs/Rectangle 481.jpg';
import img2 from '../../assets/imgs/Rectangle 482.jpg';
import img3 from '../../assets/imgs/Rectangle 483.jpg';
import AdvantagesCard from './AdvantagesCard';
function Second() {
    const [active, setActive] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
        <div>
            <div className="contentPadding py-10">
                <hr />
                <div className=" relative grid grid-cols-10 text-xs mt-5 pl-5 mb-20 lg:mb-[140px] sm:text-base">
                    <p>SLIGHT</p>
                    <p className="col-start-4">01.002</p>
                    <p className="col-start-7 col-span-4 lg:col-start-8">SIMPLIFYING MARITIME INVESTMENT FOR EVERYONE</p>
                </div>
                <div className="lg:hidden">
                    {/* tablet */}
                    <div className="sm:hidden relative overflow-hidden rounded-xl border " data-aos="fade-up">
                        <video src={cargoVideo} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10" />

                        <div className="relative grid grid-cols-1 text-white h-fit">
                            <p
                                className={`absolute text-4xl font-medium p-10 transition-all duration-700 ease-in-out transform 
                        ${active ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}
                            >
                                Why Invest In <br />
                                Maritime Shipping?
                            </p>

                            <div className={` group transition-all duration-1000 ease-in-out ${active ? ' -translate-y-[0%] z-10' : 'translate-y-[84%]'}`}>
                                <div
                                    onClick={() => setActive(prev => !prev)}
                                    className={`flex items-center gap-4 bg-white px-10 py-5 hover:cursor-pointer bottom-0 ${active ? 'bg-white/20' : ' bg-white '}`}
                                >
                                    <div className="flex-1 border-t border-gray-300"></div>
                                    <div className="border-gray-300 p-2">
                                        <div className={`${active && 'rotate-180'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-secondary/30">
                                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                                    <path d="m19 13l-7-6l-7 6" />
                                                    <path d="m19 17l-7-6l-7 6" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 border-t border-gray-300"></div>
                                </div>
                                <div
                                    className={`bg-white text-black px-5 py-7 flex flex-col transition-all duration-1000 ease-in-out ${
                                        active ? ' h-full pointer-events-auto' : '   pointer-events-none'
                                    }`}
                                >
                                    <div className="flex flex-col gap-10 pb-20">
                                        <div className="flex flex-col gap-5">
                                            <p className="sub-2">MARINE SHIPPING ADVANTAGES</p>
                                            <hr className="text-secondary/30" />
                                        </div>
                                        <p className="text-sm text-secondary/70">
                                            Slight as a platform that transform investment in maritime shipping by tokenizing them into smaller, affordable fractions.
                                        </p>
                                    </div>

                                    <div className="flex flex-nowrap gap-1 pl-5 overflow-x-auto ">
                                        {[img1, img2, img3].map(items => (
                                            <div className="relative p-10 min-w-[80%] sm:min-w-[50%] overflow-hidden rounded-xl">
                                                <img src={items} alt="" className="absolute object-cover top-0 left-0 w-full h-full" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block relative overflow-hidden rounded-xl border " data-aos="fade-up">
                        <video src={cargoVideo} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10" />

                        <div className="relative grid grid-cols-1 text-white h-fit">
                            <p
                                className={`text-4xl font-medium p-10 transition-all duration-700 ease-in-out transform  absolute
                        ${active ? 'opacity-0 translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'}`}
                            >
                                Why Invest In <br />
                                Maritime Shipping?
                            </p>

                            <div>
                                <div className={` group transition-all duration-1000 ease-in-out ${active ? '  z-10' : 'translate-x-[84%]'} flex`}>
                                    <div
                                        onClick={() => setActive(prev => !prev)}
                                        className={`flex flex-col items-center bg-white px-10 py-5 hover:cursor-pointer ${active ? 'bg-white/20' : 'bg-white'}`}
                                    >
                                        {/* Garis vertikal atas */}
                                        <div className="h-full border-l border-gray-300"></div>

                                        {/* Ikon */}
                                        <div className={`${active ? 'rotate-90' : '-rotate-90'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-secondary/30">
                                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                                    <path d="m19 13l-7-6l-7 6" />
                                                    <path d="m19 17l-7-6l-7 6" />
                                                </g>
                                            </svg>
                                        </div>

                                        {/* Garis vertikal bawah */}
                                        <div className="h-full border-l border-gray-300"></div>
                                    </div>

                                    {/* ref={contentRef} */}

                                    <div
                                        className={`bg-white text-black px-5 py-7 flex flex-col transition-all duration-1000 ease-in-out ${
                                            active ? ' h-full pointer-events-auto' : '   pointer-events-none'
                                        }`}
                                    >
                                        <div className="flex flex-col gap-10 pb-20">
                                            <div className="flex flex-col gap-5">
                                                <p className="sub-2 sm:sub-1">MARINE SHIPPING ADVANTAGES</p>
                                                <hr className="text-secondary/30" />
                                            </div>
                                            <p className="text-sm sm:text-base text-secondary/70">
                                                Slight as a platform that transform investment in maritime shipping by tokenizing them into smaller, affordable fractions.
                                            </p>
                                        </div>

                                        <div className="flex flex-nowrap gap-1 pl-5 overflow-x-auto ">
                                            {[img1, img2, img3].map(items => (
                                                <div className="relative p-10 min-w-[80%] sm:min-w-[50%] overflow-hidden rounded-xl">
                                                    <img src={items} alt="" className="absolute object-cover top-0 left-0 w-full h-full" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <AdvantagesCard />
                    </div>
                </div>
                <div className="hidden lg:grid grid-cols-[38%_1fr] gap-1 max-w-full w-full overflow-hidden">
                    <div className="p-10 border border-slate-300 rounded-xl flex flex-col justify-between gap-10" data-aos="fade-right">
                        <div className="flex flex-col gap-20">
                            <p className="title-2-medium">Why Invest In Maritime Shipping?</p>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-5">
                                    <p className="sub-1">MARINE SHIPPING ADVANTAGES</p>
                                    <hr />
                                </div>
                                <p className="sub-1">
                                    Slight as a platform that transform investment in <br /> maritime shipping by tokenizing them into smaller, affordable fractions.
                                </p>
                            </div>
                        </div>
                        <div className="flex overflow-x-auto w-full mt-auto">
                            <Swiper spaceBetween={10} slidesPerView={1.5} className="w-full" grabCursor={true}>
                                {[img1, img2, img3].map((items, idx) => (
                                    <SwiperSlide key={idx} className="relative overflow-hidden py-[13%] px-[30px] rounded-xl">
                                        <img src={items} alt="" className="absolute object-cover w-full h-full top-0 left-0" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="h-full w-full" data-aos="fade-left" data-aos-delay="400">
                        <AdvantagesCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Second;
