import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useRef, useEffect, useState } from 'react';

import img1 from '../../assets/imgs/Rectangle 471.webp';
import img2 from '../../assets/imgs/Rectangle 472.webp';
import img3 from '../../assets/imgs/Rectangle 473.webp';
import img4 from '../../assets/imgs/Rectangle 474.webp';
import img5 from '../../assets/imgs/Rectangle 475.webp';
import img6 from '../../assets/imgs/Rectangle 476.webp';
import img7 from '../../assets/imgs/Rectangle 477.webp';
import img8 from '../../assets/imgs/Rectangle 479.webp';
import img9 from '../../assets/imgs/Rectangle 478.webp';

type DemoSwipersProps = {
    showPagination?: boolean;
    cut?: boolean;
    order?: number[];
    active?: number;
};
export default function DemoSwipers({ showPagination = false, order, cut }: DemoSwipersProps) {
    const [active, setActive] = useState<number | null>(null);
    const PaginationRef = useRef<HTMLDivElement>(null);
    const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (PaginationRef.current) {
            setPaginationEl(PaginationRef.current);
        }
    }, []);

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

    const newData = order ? order.map(index => slideData[index]).filter((item): item is (typeof slideData)[number] => !!item) : slideData;
    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className="w-full h-[300px] lg:h-[420px]"
                modules={showPagination ? [Pagination] : []}
                pagination={showPagination && paginationEl ? { el: paginationEl, clickable: true } : false}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {newData.map((items, index) => (
                    <SwiperSlide onClick={() => setActive(index)} key={index}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay={index * 200 + 100}
                            data-aos-duration="1000"
                            className={`${
                                cut ? 'h-full sm:h-4/5 sm:rounded-b-none' : 'h-full'
                            } relative rounded-xl border border-slate-400 overflow-hidden flex flex-col justify-between items-end group transition-all duration-600 ease-in-out`}
                        >
                            <div className="absolute object-cover lg:scale-150  xl:scale-105 lg:translate-y-10 xl:translate-y-0  -z-10">
                                <img src={items.img} alt="" />
                            </div>
                            <div
                                className={`justify-between flex flex-col sm:w-5/9 lg:w-full ${
                                    active === index ? 'bg-white' : 'bg-white sm:bg-transparent sm:border-l sm:border-white sm:text-white lg:border-l-0 lg:border-b'
                                }  group-hover:bg-white group-hover:text-black py-10 px-5 sm:px-10 w-full h-3/5 sm:h-full lg:h-1/2 transition-all duration-300 ease-in-out`}
                            >
                                <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5 ">
                                    <p className="text-sm w-1/2 sm:w-full sm:text-base">{items.tag}</p>
                                    <p className="heading-2 sm:text-4xl sm:font-medium">{items.title}</p>
                                </div>
                                <div className={`sub-2 text-end hidden sm:block lg:hidden  transition-all duration-300 ease-in-out`}>
                                    <p>LEARN MORE →</p>
                                </div>
                            </div>
                            <div
                                className={`sub-2 items-end justify-end ${
                                    active === index ? 'bg-white' : 'text-white '
                                } px-10 py-3 rounded-full w-fit mb-5 mx-5 sm:hidden lg:block group-hover:bg-white group-hover:text-black  transition-all duration-300 ease-in-out`}
                            >
                                <p>LEARN MORE →</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {showPagination && <div ref={PaginationRef} className="flex justify-end gap-1 pt-5 custom-pagination-container" />}
        </div>
    );
}
