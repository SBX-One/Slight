import cargoVideo from '../../assets/Videos/cargo.mp4';
import img1 from '../../assets/imgs/Rectangle 483.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import VideoPlayer from './videoPlayer';

function Third() {
  const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
            AOS.init({
                duration: 800,
                once: true,
            });
        }, []);

    const investingSteps = [
        {
            id: 1,
            title: 'Invest Easily',
            description:
                'With Slight, investing in maritime vessels is straightforward and accessible. You can own a fraction of these valuable assets according to your budget. Simply sign up, complete the KYC process, and choose from a wide range of assets available on our platform. Whether you’re a seasoned investor or just starting, Slight makes it easy for you to diversify your portfolio',
        },
        {
            id: 2,
            title: 'Flexible Payment Options',
            description:
                'At SLIGHT, we believe investing shouldn’t come with rigid rules. That’s why we offer a variety of payment methods including crypto and fiat to suit your preferences. Whether you’re managing assets globally or locally, SLIGHT makes every transaction smooth and secure. With flexible options, you stay in control of how and when you invest.',
        },
        {
            id: 3,
            title: 'Receive Your Dividens',
            description:
                'Enjoy passive income from real-world maritime operations. As your assets perform, dividends are automatically distributed to your wallet based on your share. No complicated claim process, no delays just earnings that reflect your stake. SLIGHT turns complex shipping returns into simple, timely payouts.',
        },
        {
            id: 4,
            title: 'Manage & Track Assets',
            description:
                'Stay informed, in real time. Our platform gives you complete visibility over your investments from vessel location to performance metrics. Easily track dividends, sector growth, and portfolio health in one clean dashboard. With SLIGHT, managing maritime assets feels as simple as checking your favorite app.',
        },
    ];

    return (
        <div>
            <div className="contentPadding py-10 mb-[68px]">
                <hr />
                <div className=" relative grid grid-cols-10 text-xs mt-5 pl-5 mb-20 lg:mb-[140px] sm:text-base">
                    <p>SLIGHT</p>
                    <p className="col-start-4">01.003</p>
                    <p className="col-start-7 col-span-4 lg:col-start-9">WHAT MARINE ASSETS ?</p>
                </div>
                <div className="grid grid-cols-1 gap-20 lg:gap-30 ">
                    <div className="lg:flex lg: h-fit">
                        <p className="heading-2 sm:title-2-medium lg:title-1-medium  w-full" data-aos="fade-left">
                            Slight simplifying maritime <br /> Investment for Everyone
                        </p>
                        <div className="hidden lg:block w-[50%] aspect-[4/3] relative bg-black overflow-hidden rounded-2xl" data-aos="fade-right" data-aos-delay="400">
                            <img src={img1} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="">
                        {investingSteps.map(items => (
                            <div key={items.id} data-aos="fade-up" data-aos-delay={items.id * 150}>
                                <div
                                    onClick={() => setActive(prev => (prev === items.id ? null : items.id))}
                                    className={` transition-all duration-700 ease-in-out p-10 gap-32 flex justify-between lg: font-medium border-b ${
                                        active === items.id ? ` bg-secondary rounded-xl py-5 px-10` : ``
                                    }`}
                                >
                                    <p className={`sm:heading-2 lg:title-2-medium text-secondary/20 ${active === items.id && `text-white/50`}`}>0{items.id}</p>
                                    <p className={`lg:hidden sm:heading-2 lg:title-2-medium text-black ${active === items.id && `text-primary`}`}>{items.title}</p>
                                    <div className="hidden lg:flex justify-between w-full">
                                        <p className={`sm:heading-2 lg:title-2-medium text-black ${active === items.id && `text-primary`}`}>{items.title}</p>
                                        <p className={`sm:heading-2 lg:title-2-medium text-black ${active === items.id && `text-primary`}`}>→</p>
                                    </div>
                                </div>
                                {active === items.id && (
                                    <div className=" lg:grid lg:grid-cols-7 py-10 px-5 flex flex-col gap-10 ">
                                        <p className=" text-xs sm:text-base col-span-3  col-start-2">{items.description}</p>
                                        <div className="hidden col-start-6 col-span-2 xl:block  aspect-[5/4] relative bg-black overflow-hidden rounded-2xl">
                                            <VideoPlayer order={items.id}/>
                                        </div>
                                        <div className="block xl:hidden">
                                            <VideoPlayer order={items.id}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Third;
