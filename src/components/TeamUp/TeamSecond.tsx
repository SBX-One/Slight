import CardPerson from './CardPerson';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function TeamSecond() {
        useEffect(() => {
                AOS.init({
                    duration: 800,
                    once: true,
                });
            }, []);

    return (
        <div>
            <div className="contentPadding py-10 sm:py-20">
                <hr />
                <div className=" relative grid grid-cols-10 text-xs mt-5 pl-5 mb-20 lg:mb-[140px] sm:text-base">
                    <p>SLIGHT</p>
                    <p className="col-start-4">03.001</p>
                    <p className="col-start-7 col-span-4 lg:col-start-9">BEHIND THE SCENES</p>
                </div>
                <div className=" overflow-auto ">
                    <div className="flex lg:whitespace-nowrap sm:grid sm:grid-cols-3 lg:flex gap-1 w-max overflow-x-auto sm:w-full" data-aos="fade-left">
                        <button className=" buttonTeamup lg:w-max sm:sub-1  buttonActive ">Blockchain Team</button>
                        <button className=" buttonTeamup lg:w-max sm:sub-1   ">Maritime Operators</button>
                        <button className=" buttonTeamup lg:w-max sm:sub-1   ">Finance & Legal</button>

                        <hr className="hidden lg:block flex-grow border-t border-gray-400" />
                    </div>
                </div>

                <div className="">
                    <CardPerson />
                </div>
            </div>
        </div>
    );
}

export default TeamSecond;
