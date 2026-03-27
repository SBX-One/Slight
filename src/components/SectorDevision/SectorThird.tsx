import img1 from '../../assets/imgs/Frame 1233.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SectorThird() {
    useEffect(() => {
            AOS.init({
                duration: 800,
                once: true,
            });
        }, []);
    return (
        <div className="relative contentPadding py-10 h-fit lg:grid lg:grid-cols-3">
            <img src={img1} alt="" className="absolute w-full h-full top-0 left-0 -z-10" />
            <div className="absolute w-full h-full bg-secondary/60 top-0 left-0 -z-10"></div>
            <div className="flex flex-col gap-5 text-white z-10 col-start-3">
                <p className="heading-2 sm:title-">Vessels Operations</p>
                <hr />
                <div className=" bg-secondary/40 backdrop-blur-sm  rounded-xl p-5 border border-white/20" data-aos="fade-up">
                    <div className="sm:w-7/11 lg:w-full flex flex-col gap-3">
                        <p className="sub-2 lg:sub-1">WHAT IT MATTERS</p>
                        <p className="text-xs sm:text-base text-white/50">Ownership and operation of the ships themselves — from cargo vessels to tankers.</p>
                    </div>
                </div>
                <div className=" bg-secondary/40 backdrop-blur-sm  rounded-xl p-5 border border-white/20" data-aos="fade-up" data-aos-delay="200">
                    <div className="sm:w-7/11 lg:w-full flex flex-col gap-3">
                        <p className="sub-2 lg:sub-1">What users invest in</p>
                        <p className="text-xs sm:text-base text-white/50">Fractional shares of active vessels that generate returns through real-world shipping contracts.</p>
                    </div>
                </div>
                <div className=" bg-secondary/40 backdrop-blur-sm  rounded-xl p-5 border border-white/20" data-aos="fade-up" data-aos-delay="400">
                    <div className="sm:w-7/11 lg:w-full flex flex-col gap-3">
                        <p className="sub-2 lg:sub-1">Why it matters</p>
                        <p className="text-xs sm:text-base text-white/50">
                            This is the core asset class. Ships earn revenue from cargo transport, and their performance is trackable and tokenized on-chain. Investors benefit from profit sharing,
                            resale appreciation, and contract visibility.
                        </p>
                    </div>
                </div>
                <div className="bg-secondary/40 h-fit backdrop-blur-sm rounded-xl p-5 border border-white/20 " data-aos="fade-up" data-aos-delay="600">
                    <Swiper
                        modules={[Scrollbar]}
                        scrollbar={{
                            el: '.custom-scrollbar',
                            draggable: true,
                        }}
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <p className="text-center">Vessels Operations</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="text-center">Port & Logistics</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="text-center">Sustainable Fuel & Innovation</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="text-center">Data & Navigation Systems</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="text-center">Maintenance & Compliance</p>
                        </SwiperSlide>
                    </Swiper>
                    <div className="custom-scrollbar h-1 bg-white/40 rounded-full mt-4 text-white/29"></div>
                </div>
            </div>
        </div>
    );
}
