import React, { useEffect } from 'react';
import CardSecond from './CardSecond';
import CardMarque from './CardMarque';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SectorSecond() {
    useEffect(() => {
            AOS.init({
                duration: 800,
                once: true,
            });
        }, []);
    return (
        <div className="flex flex-col gap-20 lg:py-20 bg-secondary">
            <div className="contentPadding py-10">
                <hr className="text-white" />
                <div className=" relative grid grid-cols-10 text-xs mt-5 pl-5 mb-20 lg:mb-[140px] md:text-base text-white">
                    <p>SLIGHT</p>
                    <p className="col-start-4">02.001</p>
                    <p className="col-start-7 col-span-4 lg:col-start-9">WHAT MARINE ASSETS ?</p>
                </div>

                <div className="flex flex-col gap-5">
                    <CardSecond />
                    <CardMarque />
                    <div className="sm:hidden flex flex-col gap-5" data-aos="fade-up" data-aos-delay="400">
                        <button className="primaryButton w-full flex items-center justify-center">
                            <div className="flex gap-3 text-center text-xs font-bold">
                                <p>Invest Now</p>
                                <p>→</p>
                            </div>
                        </button>
                        <button className=" normalButton border border-slate-300 w-full flex items-center justify-center">
                            <div className="flex gap-3 text-center text-xs font-bold">
                                <p>Play Video</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
