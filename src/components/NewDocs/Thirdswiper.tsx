import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import 'aos/dist/aos.css';
import img1 from '../../assets/imgs/Rectangle 471.jpg';
import img2 from '../../assets/imgs/Rectangle 472.jpg';
import img3 from '../../assets/imgs/Rectangle 473.jpg';
import img4 from '../../assets/imgs/Rectangle 474.jpg';
import img5 from '../../assets/imgs/Rectangle 475.jpg';
import img6 from '../../assets/imgs/Rectangle 476.jpg';
import img7 from '../../assets/imgs/Rectangle 477.jpg';
import img8 from '../../assets/imgs/Rectangle 479.jpg';
import img9 from '../../assets/imgs/Rectangle 478.jpg';

type DemoSwipersProps = {
    cut?: boolean;
    order?: number[];
};
export default function ThirdSwiper({ order }: DemoSwipersProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<GSAPTween | null>(null);
    const [active, setActive] = useState<number | null>(null);

    const slideData = [
        {
            img: img1,
            tag: 'RAISES IN SERIES-A',
            title: '$18M to Expand RWA Infr.',
        },
        {
            img: img2,
            tag: 'ASSET EXPLORER',
            title: 'Free Beta Access',
        },
        {
            img: img3,
            tag: 'ON-CHAIN VESSEL',
            title: 'Perform Report',
        },
        {
            img: img4,
            tag: 'Q2 REPORT',
            title: 'Maritime Token Velocity',
        },
        {
            img: img5,
            tag: 'COMPARING',
            title: 'R.O.I vs RE’IT',
        },
        {
            img: img6,
            tag: 'ASIA PASIFIC SHIFTS',
            title: 'Global  Index Reacts',
        },
        {
            img: img7,
            tag: 'SLIGHT 2025',
            title: 'Sector Flyer v1.2',
        },
        {
            img: img8,
            tag: 'Environ-mental Impact Forecast',
            title: 'Green Shipping Sector',
        },
        {
            img: img9,
            tag: 'INTERNAT-IONAL WATERS',
            title: 'Fractions Owner Legal Work',
        },
    ];

    useEffect(() => {
        const element = marqueeRef.current;
        if (!element) return;

        animationRef.current = gsap.to(element, {
            x: '-50%',
            ease: 'linear',
            duration: 14,
            repeat: -1,
        });

        const handleMouseEnter = () => animationRef.current?.pause();
        const handleMouseLeave = () => animationRef.current?.resume();

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            animationRef.current?.kill();
        };
    }, []);

    const newData = order ? order.map(index => slideData[index]).filter((item): item is (typeof slideData)[number] => !!item) : slideData;

    return (
        <div>
            {/* use when mobile - tablet */}
            <div className=' lg:hidden'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={5}
                    slidesPerView={1}
                    className="w-full h-[300px] lg:h-[420px]"
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {newData.map((items, index) => (
                        <SwiperSlide onClick={() => setActive(index)} key={index}>
                            <div className={`h-full sm:h-4/5 lg:h-3/5 sm:rounded-b-none relative rounded-xl border border-slate-400 overflow-hidden flex flex-col justify-between items-end transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-xl cursor-pointer ${active && ""}`}>
                                <div className="absolute object-cover lg:-translate-y-28 -z-10">
                                    <img src={items.img} alt="" />
                                </div>
                                <div
                                    className={`justify-between flex flex-col sm:w-5/9  lg:w-full bg-white sm:bg-transparent sm:text-white sm:border-l lg:border-l-0  py-10 px-5 sm:px-10 w-full h-3/5 sm:h-full lg:h-1/2`}
                                >
                                    <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5 ">
                                        <p className="text-sm w-1/2  sm:w-full lg:w-1/2 sm:text-base">{items.tag}</p>
                                        <p className="heading-2 sm:text-4xl sm:font-medium">{items.title}</p>
                                    </div>
                                </div>
                                <div className="sub-2 items-end justify-end bg-white px-10 py-3 rounded-full w-fit mb-5 mx-5 sm:hidden ">
                                    <p>LEARN MORE →</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* for media 1280 px  */}
            <div className="hidden xl:flex w-full relative overflow-hidden">
                <div ref={marqueeRef} className="flex gap-5 whitespace-nowrap h-fit w-2/7 ">
                    {[...newData, ...newData].map((items, index) => (
                        <div onClick={() => setActive(index)} key={index} className="min-w-full min-h-[320px] p-2">
                            <div className="h-full relative rounded-xl border border-slate-400 overflow-hidden flex flex-col justify-between items-end transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-xl cursor-pointer">
                                <div className="absolute object-cover lg:-translate-y-48 -z-10">
                                    <img src={items.img} alt="" />
                                </div>
                                <div className="justify-between flex flex-col sm:w-5/9 lg:w-full bg-white sm:bg-transparent sm:text-white sm:border-l lg:border-l-0 py-10 px-5 sm:px-10 w-full h-3/5 sm:h-full lg:h-1/2">
                                    <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5">
                                        <p className="text-sm whitespace-normal break-words w-1/2 sm:w-full lg:w-1/2 sm:text-base">{items.tag}</p>
                                        <p className="heading-2  whitespace-normal break-words sm:text-4xl sm:font-medium">{items.title}</p>
                                    </div>
                                </div>
                                <div className="sub-2 items-end justify-end bg-white px-10 py-3 rounded-full w-fit mb-5 mx-5 sm:hidden">
                                    <p>LEARN MORE →</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
