import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AdvantagesCard() {
    const [active, setActive] = useState<number | null>(null);
    const advantagesData = [
        {
            id: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 10h4"></path>
                        <path
                            strokeWidth={1.5}
                            d="M20.833 11h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933c-.035-.002-.076-.002-.16-.002Z"
                        ></path>
                        <path
                            strokeWidth={1.5}
                            d="M20.965 11c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828"
                        ></path>
                        <path strokeLinecap="round" strokeWidth={1.5} d="m6 6l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 6"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.991 14h.01"></path>
                    </g>
                </svg>
            ),
            title: '2.2 Trillion USD',
            subtitle: 'Tap into 2.2 trillion USD market industry.',
            description:
                "The maritime shipping industry moves the world literally and financially. With a market size exceeding $2.2 trillion, it's one of the most lucrative yet traditionally closed sectors. SLIGHT opens this massive economy to everyday investors by fractionalizing access to real, high-performing maritime assets.",
        },
        {
            id: 2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></path>
                        <path
                            strokeLinecap="round"
                            d="M12 15.333c1.105 0 2-.746 2-1.666S13.105 12 12 12s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V16m0-8v.667m0 0c1.105 0 2 .746 2 1.666"
                        ></path>
                    </g>
                </svg>
            ),
            title: 'Million-Dollar Assets',
            subtitle: 'Become an owner of multi-million dollar asset and yearn with only 1000 USD.',
            description:
                "The maritime shipping industry moves the world literally and financially. With a market size exceeding $2.2 trillion, it's one of the most lucrative yet traditionally closed sectors. SLIGHT opens this massive economy to everyday investors by fractionalizing access to real, high-performing maritime assets.",
        },
        {
            id: 3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737C8.75 11.396 10.035 12.98 12 13c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.4 1.4 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-3.293 0-4.281 1.862c-.791 1.49-.33 3.103 0 3.724"></path>
                    </g>
                </svg>
            ),
            title: '80% Global Trade',
            subtitle: '80% of all trade in the world is carried with vessels.',
            description:
                "The maritime shipping industry moves the world literally and financially. With a market size exceeding $2.2 trillion, it's one of the most lucrative yet traditionally closed sectors. SLIGHT opens this massive economy to everyday investors by fractionalizing access to real, high-performing maritime assets.",
        },
        {
            id: 4,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none">
                        <path stroke="currentColor" strokeWidth={1.5} d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></path>
                        <path
                            fill="currentColor"
                            d="m6.048 10.849l.237-.712zm2.175.725l-.237.712zm.794 1.682l-.7-.27zM7.77 16.498l.7.269zm10.182-5.649l-.237-.712zm-2.175.725l.237.712zm-.794 1.682l.7-.27zm1.247 3.242l-.7.269zm-5.806 1.26l.651.372zM12 15l.651-.372a.75.75 0 0 0-1.302 0zm5.147-7.103l-.158-.733zm-1.898.407l.157.733zm-6.498 0l.157-.734zm-1.898-.407l-.157.733zm6.723 9.86l-.651.372zm1.462-9.409l-.152-.734zm-6.076 0l-.152.735zm6.322 3.419l.394.638zm-.466.986l.743-.102zm-6.102-.986l-.394.638zm.466.986l.743.102zM5.81 11.56l2.175.726l.474-1.423l-2.175-.726zm2.506 1.427L7.07 16.228l1.4.539l1.247-3.242zm9.398-2.85l-2.175.726l.474 1.423l2.175-.726zm-3.432 3.388l1.247 3.242l1.4-.539l-1.247-3.241zm-3.208 4.605l1.576-2.758l-1.302-.744l-1.576 2.757zM16.99 7.164l-1.897.406l.314 1.467l1.898-.407zm-8.08.406l-1.9-.406l-.314 1.466l1.898.407zm2.44 7.802l1.576 2.758l1.302-.745l-1.576-2.757zm3.743-7.802l-.206.044l.304 1.469l.216-.046zM8.594 9.037l.216.046l.304-1.47l-.206-.043zm6.293-1.423a14.25 14.25 0 0 1-5.773 0L8.81 9.083a15.75 15.75 0 0 0 6.38 0zM9.145 19.25c.798 0 1.535-.428 1.93-1.12l-1.302-.745a.72.72 0 0 1-.628.365zm6.385-2.483a.723.723 0 0 1-.675.983v1.5a2.223 2.223 0 0 0 2.075-3.022zm.01-5.904c-.222.074-.458.147-.65.265l.788 1.277c-.01.005-.002-.001.056-.023c.061-.023.143-.05.28-.096zm.143 2.124a8 8 0 0 1-.104-.277c-.02-.059-.02-.069-.018-.059l-1.486.204c.03.223.124.452.208.67zm-.793-1.859a1.75 1.75 0 0 0-.815 1.727l1.486-.204a.25.25 0 0 1 .117-.246zm3.36-1.733a.78.78 0 0 1-.535.742l.474 1.423a2.28 2.28 0 0 0 1.561-2.165zM7.07 16.228a2.223 2.223 0 0 0 2.075 3.022v-1.5a.723.723 0 0 1-.675-.983zm.916-3.942c.137.045.219.073.28.096c.058.022.065.028.056.023l.788-1.277c-.192-.118-.428-.191-.65-.265zm1.73 1.24c.085-.22.178-.448.209-.671l-1.486-.204c.001-.01.001 0-.018.059a8 8 0 0 1-.104.277zm-1.394-1.121a.25.25 0 0 1 .117.246l1.486.204a1.75 1.75 0 0 0-.815-1.727zM4.25 9.395c0 .983.629 1.855 1.56 2.165l.475-1.423a.78.78 0 0 1-.535-.742zm1.5 0c0-.498.46-.87.946-.765l.315-1.466A2.282 2.282 0 0 0 4.25 9.395zm7.175 8.735a2.22 2.22 0 0 0 1.93 1.12v-1.5c-.26 0-.5-.14-.628-.365zm6.825-8.735a2.282 2.282 0 0 0-2.76-2.231l.314 1.466a.782.782 0 0 1 .946.765z"
                        ></path>
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M19.454 14.5c1.583.796 2.546 1.848 2.546 3c0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-1.152.963-2.204 2.546-3"
                        ></path>
                    </g>
                </svg>
            ),
            title: '2 Profitable Vessels',
            subtitle: 'Become an owner of multi-million dollar asset and yearn with only 1000 USD.',
            description:
                "The maritime shipping industry moves the world literally and financially. With a market size exceeding $2.2 trillion, it's one of the most lucrative yet traditionally closed sectors. SLIGHT opens this massive economy to everyday investors by fractionalizing access to real, high-performing maritime assets.",
        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
        <div className="h-full">
            <div className="lg:hidden">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        642: {
                            slidesPerView: 1.5,
                        },
                    }}
                    className="mt-10 "
                >
                    {advantagesData.map(items => (
                        <SwiperSlide
                            onClick={() => setActive(prev => (prev === items.id ? null : items.id))}
                            className={`${
                                active === items.id && 'bg-secondary text-white'
                            } hover:bg-secondary hover:text-white transition-all duration-300   group  p-10 border rounded-4xl border-secondary/20 `}
                            key={items.id}
                        >
                            <div className="flex min-h-[720px] flex-col gap-10">
                                <div className="flex flex-col gap-5 items-start">
                                    <div className="flex items-center gap-5 w-full">
                                        <div className="px-5 py-2 bg-primary rounded-full">
                                            <div className="w-6 text-secondary">{items.icon}</div>
                                        </div>
                                        <p className="sub-1">{items.id < 10 && <span> 0{items.id}</span>} - ADVANTAGES</p>
                                    </div>
                                    <p className="title-2-medium">{items.title}</p>
                                </div>
                                <hr className="text-slate-400" />
                                <p className="sub-1">{items.subtitle}</p>
                                <hr className={`${active !== items.id && ' hidden'} text-slate-400 `} />
                                <p className="">{items.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="h-full">
                <div className="hidden lg:grid grid-cols-2 h-full gap-1">
                    {advantagesData.map(items => (
                        <div
                            onClick={() => setActive(prev => (prev === items.id ? null : items.id))}
                            className={`${
                                active === items.id && 'bg-secondary text-white'
                            } hover:bg-secondary hover:text-white transition-all duration-300   group h-full p-10 border rounded-4xl border-secondary/20 `}
                            key={items.id}
                            // data-aos="fade-left" data-aos-delay={items.id * 150}
                        >
                            <div className="flex  flex-col gap-10">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-5 items-start">
                                        <div className="flex items-center gap-5 w-full">
                                            <div className="px-5 py-2 bg-primary rounded-full">
                                                <div className="w-6 text-secondary">{items.icon}</div>
                                            </div>
                                            <p className="sub-1">{items.id < 10 && <span> 0{items.id}</span>} - ADVANTAGES</p>
                                        </div>
                                        <p className="title-2-medium">{items.title}</p>
                                    </div>
                                    <hr className="text-slate-400" />
                                </div>
                                <p className="sub-1">{items.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
