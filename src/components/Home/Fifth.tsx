import CardPerson from '../TeamUp/CardPerson';
import gridGray from '../../assets/imgs/grids/gray.svg';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Fifth() {
    const [active, setActive] = useState<string | null>(null);
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
        <div className="contentPadding py-10">
            <hr />
            <div className=" relative grid grid-cols-10 text-xs mt-5 pl-5 mb-20 lg:mb-[140px] sm:text-base">
                <p>SLIGHT</p>
                <p className="col-start-4">01.005</p>
                <p className="col-start-7 col-span-4 lg:col-start-9">BEHIND THE SCENES</p>
                <img src={gridGray} className="absolute -z-10 object-cover  -translate-y-1/7 " />
            </div>

            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-10">
                    <div className=" overflow-auto ">
                        <div className="grid  lg:whitespace-nowrap justify-center  grid-cols-3 lg:flex  sm:w-max sm:overflow-x-auto lg:w-full" data-aos="fade-left">
                            <button
                                onClick={() => setActive(prev => (prev === 'blockchain' ? null : 'blockchain'))}
                                className={`text-xs font-medium sm:buttonTeamup lg:w-max sm:sub-1 ${active === 'blockchain' ? 'buttonActive' : 'bg-white'}`}
                            >
                                Blockchain Team
                            </button>

                            <button
                                onClick={() => setActive(prev => (prev === 'maritime' ? null : 'maritime'))}
                                className={`text-xs font-medium sm:buttonTeamup lg:w-max sm:sub-1 ${active === 'maritime' ? 'buttonActive' : 'bg-white'}`}
                            >
                                Maritime Operators
                            </button>

                            <button
                                onClick={() => setActive(prev => (prev === 'finance' ? null : 'finance'))}
                                className={`text-xs font-medium sm:buttonTeamup lg:w-max sm:sub-1 ${active === 'finance' ? 'buttonActive' : 'bg-white'}`}
                            >
                                Finance & Legal
                            </button>

                            <hr className="hidden lg:block flex-grow border-t border-gray-400" />
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 text-center  lg:text-start" data-aos="fade-right" data-aos-delay="600">
                        <p className="heading-2 sm:title-2-medium lg:title-1-medium ">Meet Our Blockchain Specialist</p>
                        <p className=" hidden lg:block text-base ">
                            Our Blockchain Team is revolutionizing the maritime industry by enhancing transaction transparency and security. With a focus on innovation, they are shaping a more
                            efficient and secure future for maritime operations
                        </p>
                    </div>
                </div>

                <CardPerson />
            </div>
        </div>
    );
}

export default Fifth;
