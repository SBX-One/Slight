import gridGray from '../../assets/imgs/grids/gray.svg'
import ThirdSwiper from './Thirdswiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function NdThird() {
     useEffect(() => {
            AOS.init({
                duration: 800,
                once: true,
            });
        }, []);
    return (
        <div>
            <div className="contentPadding py-10 sm:py-20 overflow-hidden relative">
                <img src={gridGray} alt="grid " className="absolute w-full h-full bottom-0 -z-10" />
                <hr />
                <div className="grid grid-cols-10 text-xs mt-5 pl-5 mb-20 sm:text-base">
                    <p>SLIGHT</p>
                    <p className="col-start-4">04.002</p>
                    <p className="col-start-7 col-span-4 lg:col-start-9">LATEST FROM US</p>
                </div>

                <div className="text-center flex flex-col gap-10 lg:grid lg:grid-cols-9 lg:items-center" data-aos="fade-up" >
                    <p className="title-2 sm:title-1 lg:col-span-5">Never Miss an Update</p>
                    <p className="text-xs sm:text-base lg:col-start-7 lg:col-span-3 lg:text-start lg:border-l-2 lg:border-l-primary  lg:pl-2 ">
                        Get SLIGHT insights and asset alerts <br className="hidden lg:block" /> delivered straight to your inbox.
                    </p>
                </div>

                <div className="mt-10 justify-center flex lg:translate-x-3/16 " data-aos="fade-up" data-aos-delay="200">
                    <div className="p-5 border bg-white border-black/20 rounded-4xl grid grid-cols-1 gap-5 w-full sm:w-3/5 lg:w-2/6 sm:items-center sm:justify-center ">
                        <input type="text" className="border border-black/20 p-5 rounded-xl w-full" placeholder="yutakoroko@gmail.com" />
                        <div className="flex gap-3 justify-center items-center">
                            <input type="checkbox" className="rounded-full" />
                            <p className="text-xs font-medium">
                                <span className="text-black/50">Send me daily news to my Email</span>
                            </p>
                        </div>
                        <div className=" items-center button-xs">
                            <button className="primaryButton w-full text-center ">
                                <div className="flex gap-3 justify-center">
                                    <p>Submit</p>
                                    <p>→</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 relative" data-aos="fade-up" data-aos-delay="400">
                    <ThirdSwiper order={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />
                </div>
            </div>
        </div>
    );
}
