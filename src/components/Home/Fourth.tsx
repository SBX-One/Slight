import CardFourth from './CardFourth';
import CardFourthSliders from './CardFourthSliders';
import gridGray from '../../assets/imgs/grids/gray.svg';
import logo from '../../assets/imgs/Logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Fourth() {
    useEffect(() => {
        AOS.init({
            duration: 1800,
            once: true,
        });
    }, []);
    return (
        <div className="contentPadding py-10">
            <hr />
            <div className=" relative grid grid-cols-10 text-xs mt-5 pl-5 mb-20 lg:mb-[140px] sm:text-base">
                <p>SLIGHT</p>
                <p className="col-start-4">01.004</p>
                <p className="col-start-7 col-span-4 lg:col-start-9">ADVANTAGES</p>
                <img src={gridGray} loading="lazy" className="absolute -z-10 object-cover  -translate-y-1/7 " />
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-9 gap-5 mb-20">
                <p className="text-sm lg:text-base text-secondary" data-aos="fade-up" data-aos-delay="400">
                    PLATFORM <br />
                    ADVANTAGES
                </p>
                <img src={logo} alt="" loading="lazy" className="hidden lg:block col-span-3 w-full pt-10" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="700" data-aos-offset="0"  />
                <div className="flex flex-col gap-10 col-start-5 col-span-5 lg:col-start-6 lg:col-span-6 " data-aos="fade-up">
                    <p className="heading-2 lg:title-2-medium ">Safety is our top priority and we work only with reputable partner to maintain the highest standards across all operations</p>
                    <div className="flex justify-end lg:justify-start">
                        <button className="normalButton border  w-fit border-secondary/20 font-bold">Invest Now →</button>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                <CardFourthSliders />
            </div>
            <div className="hidden sm:block">
                <CardFourth />
            </div>
        </div>
    );
}

export default Fourth;
