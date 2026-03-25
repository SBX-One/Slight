import { useState, useEffect } from 'react';
import gridGray from '../../assets/imgs/grids/gray.svg';
import gridLime from '../../assets/imgs/grids/lime.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../assets/imgs/Rectangle 481.jpg';
import img2 from '../../assets/imgs/Rectangle 482.jpg';
import img3 from '../../assets/imgs/Rectangle 483.jpg';

type JobItem = {
    id: number;
    position: string;
    salaryRange: string;
    description: string;
    shortDescription: string;
};
function TeamThird() {
    const [open, setOpen] = useState<number | null>(null);
    const jobData: JobItem[] = [
        {
            id: 1,
            position: 'Blockchain Developer',
            salaryRange: '$120,000 - $180,000',
            description:
                'As a Blockchain Developer, you will be responsible for building the core logic that powers decentralized systems. You will design, implement, and deploy smart contracts on various blockchain platforms such as Ethereum, Solana, or other Layer 1/Layer 2 networks.',
            shortDescription: 'As a Blockchain Developer, you will be responsible for building the core logic that powers decentralized systems',
        },
        {
            id: 2,
            position: 'UI/UX Designer',
            salaryRange: '$120,000 - $180,000',
            description:
                'We are seeking a designer who not only creates visually striking interfaces but also understands the nuances of user flows in Web3 products. You will translate complex blockchain mechanics into user-friendly layouts, designing for wallet connections, signature prompts, and multi-step transactions.',
            shortDescription: 'We are seeking a designer who not only creates visually striking interfaces but also understands the nuances of user flows in Web3 products.',
        },
        {
            id: 3,
            position: 'Smart Contract Engineer',
            salaryRange: '$120,000 - $180,000',
            description:
                'In this role, you will take full ownership of developing and maintaining smart contracts that drive the logic behind tokens, DeFi protocols, NFTs, or DAO mechanisms. You are expected to write clean, secure, and verifiable code, conduct thorough unit testing, and collaborate with auditors for vulnerability assessments.',
            shortDescription: 'In this role, you will take full ownership of developing and maintaining smart contracts that drive the logic behind tokens, DeFi protocols, NFTs, or DAO mechanisms.',
        },
    ];
      useEffect(() => {
                AOS.init({
                    duration: 800,
                    once: true,
                });
            }, []);
    return (
        <div>
            <div className="contentPadding py-10 grid grid-cols-1 gap-20">
                <div>
                    <hr />
                    <div data-aos="fade-up" className=" relative grid grid-cols-10 text-xs mt-5 pl-5 mb-20 lg:mb-[140px] sm:text-base">
                        <p>SLIGHT</p>
                        <p className="col-start-4">03.002</p>
                        <p className="col-start-7 col-span-4 lg:col-start-9">BEHIND THE SCENES</p>
                    </div>
                </div>

                <div className="relative grid grid-cols-3 lg:grid-cols-10" data-aos="fade-up" data-aos-delay="200">
                    <img src={gridLime} className="absolute -z-10 w-1/2 -translate-y-1/2" />
                    <p className="text-xs sm:text-base text-slate-400">
                        BE THE <br /> ONE OF US
                    </p>
                    <p className="heading-2 lg:text-4xl lg:font-medium col-span-2 lg:col-span-10  xl:col-span-5 lg:col-start-3 xl:col-start-3">
                        We are responsible not only for creating high level works, but also for improving the quality of design
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay={ 200} data-aos-once="true">
                    {jobData.map(items => (
                        <div key={items.id} className={`${open === items.id ? 'mb-5' : 'border rounded-xl mb-5 border-slate-200'}`}>
                            <div
                                onClick={() => setOpen(prev => (prev === items.id ? null : items.id))}
                                className={`relative overflow-hidden grid grid-cols-3 lg:grid-cols-11 rounded-2xl py-5 px-5 sm:px-10  transition-all duration-700 ease-in-out  ${
                                    open === items.id ? 'items-start bg-secondary  py-10 lg:py-20 ' : 'py-10 lg:py-20'
                                }`}
                            >
                                <p className=" text-xs sm:text-base sm:w-1/2 lg:col-span-2 text-slate-400">{items.salaryRange}</p>
                                <div className="col-span-2 grid grid-cols-1 lg:col-span-9 lg:grid lg:grid-cols-9 lg:w-full gap-5 sm:gap-10 ">
                                    <p className={`heading-2 flex gap-5 sm:title-2-medium lg:w-full   lg:col-span-4 ${open === items.id ? 'text-primary' : ''}`}>
                                        {items.position} {open === items.id && <span className="hidden sm:block lg:hidden">→</span>}
                                    </p>
                                    <div className="sm:hidden">{open === items.id && <p className="text-slate-200 text-xs">{items.shortDescription}</p>}</div>
                                    <div className={` ${open === items.id && 'lg:hidden'} hidden lg:block lg:col-span-5 lg:col-start-7 text-justify`}>
                                        <p className="text-slate-400 text-base">{items.description}</p>
                                    </div>
                                    <div className="hidden sm:block lg:hidden ">{open === items.id && <p className="text-slate-400 text-xs">{items.description}</p>}</div>
                                    <img src={open === items.id ? gridLime : gridGray} className="absolute right-0  w-1/2  translate-y-1/5 -z-0" />
                                </div>

                                <div className="col-span-11 col-start-3 pt-10 relative">
                                    <div className="hidden lg:block">
                                        {open === items.id && (
                                            <div className="absolute  -translate-x-1/3 w-[70%] gap-10">
                                                <Swiper spaceBetween={10} slidesPerView={2} className="" grabCursor={true}>
                                                    {[img1, img2, img3].map(items => (
                                                        <SwiperSlide className=" relative overflow-hidden py-22 px-30 rounded-xl">
                                                            <img src={items} alt="" className="absolute object-cover w-full h-full top-0 left-0" />
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>
                                        )}
                                    </div>
                                    {open === items.id && (
                                        <div className="   grid grid-cols-11 ">
                                            <div className="col-span-11 lg:grid lg:grid-cols-9">
                                                <div className="flex overflow-x-auto col-span-3  gap-5"></div>

                                                <div className={`hidden lg:block lg:col-span-5 lg:col-start-7 text-justify`}>
                                                    <p className="text-slate-400 text-base">{items.description}</p>
                                                    {open === items.id && (
                                                        <div className="text-end text-background py-3 px-10 mt-5">
                                                            <button>LEARN MORE →</button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamThird;
