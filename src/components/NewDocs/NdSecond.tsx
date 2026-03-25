import img from '../../assets/imgs/Frame 1321314591.png';
import gridGray from '../../assets/imgs/grids/gray.svg'
import DemoSwipers from './DemoSwipers';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function NdSecond() {
          useEffect(() => {
                    AOS.init({
                        duration: 800,
                        once: true,
                    });
                }, []);
    return (
        <div>
            <div className="contentPadding py-10 sm:py-20 flex flex-col">
                <hr />
                <div className=" relative grid grid-cols-10 text-xs mt-5 pl-5 mb-20 lg:mb-[140px] sm:text-base">
                    <p>SLIGHT</p>
                    <p className="col-start-4">04.001</p>
                    <p className="col-start-7 col-span-4 lg:col-start-9">LATEST FROM US</p>
                    <img src={gridGray} className="absolute -z-10 object-cover  -translate-y-1/7 " />
                </div>

                <div className="lg:grid lg:grid-cols-2 " data-aos="fade-left">
                    <div className=" overflow-auto ">
                        <div className="grid grid-cols-5 w-max gap-1 overflow-auto">
                            <button className=" buttonTeamup  sm:sub-1  w-full buttonActive ">all</button>
                            <button className=" buttonTeamup  sm:sub-1  w-full  ">announcements</button>
                            <button className=" buttonTeamup  sm:sub-1  w-full  ">Market Analysis</button>
                            <button className=" buttonTeamup  sm:sub-1  w-full  ">Repots</button>
                            <button className=" buttonTeamup  sm:sub-1  w-full  ">On-Chain-Data</button>
                        </div>
                    </div>
                    <hr className="hidden lg:block flex-grow border-t " />
                </div>

                <div className="relative my-10 lg:my-20 w-full h-fit flex justify-between items-center border border-slate-400  overflow-hidden rounded-xl" data-aos="fade-up">
                    <img src={img} alt="background cargo" className="absolute scale-150 top-28 lg:top-0 left-0 w-full h-full object-cover object-right " />
                    <div className="absolute w-full h-full object-cover bg-secondary/30"></div>
                    <div className="relative w-full z-10 p-16 text-background">
                        <div>
                            <p className="text-sm">SLIGHT LAUNCHES</p>
                            <p className="heading-2 sm:title-2  lg:title-1">
                                FRACTIONAL <br className="hidden lg:block" /> FUEL <br className="lg:hidden" />
                                <span className="text-primary">FINANCING</span>
                            </p>
                            <p className="pt-5 ">LEARN MORE →</p>
                        </div>
                        <p className=" pt-64 text-right lg:hidden">LEARN MORE →</p>
                    </div>
                    <div className="hidden lg:block bg-white p-16 z-10 w-3/9">
                        <div className="flex flex-col gap-5">
                            <p className="font-medium">Tureaki Jun’sanis Markisa Mangga Kelza</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Id viverra aliquam auctor ac commodo sit ipsum enim. </p>
                            <p>Aliquam dictum aliquet sed magna dictumst amet eget. Nibh luctus euismod tortor in. </p>
                        </div>
                        <p className="mt-20 text-right font-medium">JULY 1 2025 </p>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:gap-20">
                    <div className="flex flex-col gap-5 lg:gap-10" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex justify-center items-center gap-2.5 w-full pt-10">
                            <div className="flex-grow h-[1px] bg-gray-300" />
                            <p className="sub-2 ">ANNOUNCEMENT</p>
                            <div className="flex-grow h-[1px] bg-gray-300" />
                        </div>
                        <div>
                            <DemoSwipers showPagination={true} active={0} order={[0, 1, 2]} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-10" data-aos="fade-up" data-aos-delay="400">
                        <div className="flex justify-center items-center gap-2.5 w-full ">
                            <div className="flex-grow h-[1px] bg-gray-300" />
                            <p className="sub-2 ">MARKET ANALYSIS</p>
                            <div className="flex-grow h-[1px] bg-gray-300" />
                        </div>
                        <div>
                            <DemoSwipers showPagination={true} order={[3, 4, 5]} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-10" data-aos="fade-up" data-aos-delay="600">
                        <div className="flex justify-center items-center gap-2.5 w-full ">
                            <div className="flex-grow h-[1px] bg-gray-300" />
                            <p className="sub-2 ">REPORT</p>
                            <div className="flex-grow h-[1px] bg-gray-300" />
                        </div>
                        <div>
                            <DemoSwipers showPagination={true} order={[6, 7, 8]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
