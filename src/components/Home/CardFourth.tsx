import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/imgs/Rectangle 482.webp';
import img2 from '../../assets/imgs/Rectangle 483.webp';
import img3 from '../../assets/imgs/Rectangle 481.webp';

function CardFourth() {
    const [active, setActive] = useState<number | null>(null);
    const [hoverId, setHoverId] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

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
        <div data-aos="fade-up" data-aos-delay={150}>
            <div className="lg:hidden flex flex-col gap-1">
                {cardData.map((items, index) => {
                    const isExpanded = active === index || hoverId === index;
                    return (
                        <div
                            key={index}
                            onClick={() => setActive(prev => (prev === index ? null : index))}
                            onMouseEnter={() => setHoverId(index)}
                            onMouseLeave={() => setHoverId(null)}
                            className={`grid grid-cols-2 relative overflow-hidden rounded-xl border`}
                        >
                            <div className={`${isExpanded ? 'bg-white text-secondary' : 'text-white'}  transition-all duration-300 border-l col-start-2 p-10 flex flex-col gap-10 cursor-pointer`}>
                                <div className="grid grid-cols-1 gap-5">
                                    <p>{items.label}</p>
                                    <p className="title-2-medium">{items.title}</p>
                                    <hr />
                                </div>
                                <p className="pb-7">{items.description}</p>
                            </div>
                            <img src={items.image} alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
                        </div>
                    );
                })}
            </div>

            <div className="hidden lg:grid grid-cols-6 gap-1">
                {cardData.map((items, index) => {
                    const ptClass = index === 0 ? 'pt-0' : index === 1 ? ' mt-30' : index === 2 ? 'mt-60' : '';
                    const isExpanded = active === index || hoverId === index;
                    return (
                        <div
                            key={index}
                            onClick={() => setActive(prev => (prev === index ? null : index))}
                            onMouseEnter={() => setHoverId(index)}
                            onMouseLeave={() => setHoverId(null)}
                            className={` col-span-2 relative overflow-hidden h-[432px] rounded-xl border ${ptClass} group cursor-pointer`}
                        >
                            <div
                                className={`${isExpanded ? 'bg-white text-secondary h-fit' : 'text-white'} transition-all duration-700 ease-in-out border-l col-start-2 p-10 lg:border-l-0 flex flex-col gap-10 h-5/11 border-b`}
                            >
                                <div className="grid grid-cols-2 gap-5 ">
                                    <p className="w-1/2">{items.label}</p>
                                    <div className="flex flex-col gap-5">
                                        <p className="title-2-medium ">{items.title}</p>
                                        <div className={`grid transition-all duration-700 ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className="overflow-hidden">
                                                <p className="pb-7">{items.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!isExpanded && (
                                <div className="absolute top-0 w-full h-full text-white flex items-end justify-center pb-4 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={28} viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                                            <path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"></path>
                                            <path d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"></path>
                                            <path strokeLinecap="round" d="M12 2v5"></path>
                                        </g>
                                    </svg>
                                </div>
                            )}

                            <img src={items.image} alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CardFourth;
