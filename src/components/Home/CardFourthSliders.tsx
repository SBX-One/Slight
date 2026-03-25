import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import img1 from '../../assets/imgs/Rectangle 482.jpg';
import img2 from '../../assets/imgs/Rectangle 483.jpg';
import img3 from '../../assets/imgs/Rectangle 481.jpg';


export default function CardFourthSliders() {
    const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);
    const PaginationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (PaginationRef.current) {
            setPaginationEl(PaginationRef.current);
        }
    }, [PaginationRef]);

    const cardData = [
        {
            label: 'WE PROVIDE',
            title: 'Insurance',
            description: 'All assets are insured by top providers, reducing risks and protecting your investments.',
            image: img1,
        },
        {
            label: 'WE ACCEPT',
            title: 'Only Reputable Partners',
            description: 'All assets are insured by top providers, reducing risks and protecting your investments.',
            image: img2,
        },
        {
            label: 'WE GIVE',
            title: 'Time Charter Contracts',
            description: 'All assets are insured by top providers, reducing risks and protecting your investments.',
            image: img3,
        },
    ];
    return (
        <div>
            {' '}
            <div>
                {paginationEl && (
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={1.1}
                        pagination={{
                            el: paginationEl,
                            clickable: true,
                        }}
                    >
                        {cardData.map((items, index) => (
                            <SwiperSlide key={index} className="relative overflow-hidden min-h-[348px] rounded-xl border ">
                                <div className="p-5 bg-white flex  flex-col gap-5">
                                    <div className="grid grid-cols-1 gap-5">
                                        <p>{items.label}</p>
                                        <p>{items.title}</p>
                                        <hr />
                                    </div>
                                    <p>{items.description}</p>
                                </div>
                                <img src={items.image} alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                <div ref={PaginationRef} className="flex justify-end gap-1 pt-5 custom-pagination-container"></div>
            </div>
        </div>
    );
}
