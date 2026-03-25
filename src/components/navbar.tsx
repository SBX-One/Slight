import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/imgs/Logo.svg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentLocation = location.pathname;
    const isActive = (path: string) => currentLocation === path;
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {}, [location]);

    console.log(location);
    return (
        <div className=" contentPadding py-[30px]">
            <div className="flex justify-between  items-center ">
                <div className="flex gap-3">
                    <img src={logo} alt="" />
                    <p className="text-2xl font-bold italic">
                        Cryp<span className="text-primary ">Itime</span>
                    </p>
                </div>
                <div className="flex gap-1 ">
                    <div className=" hidden xl:grid  rounded-2xl  gap-1  grid-cols-4 justify-between bg-white  ">
                        <Link to={'/'} className="">
                            <button className={`sub-1 normalButton w-full ${isActive('/') && ' buttonActive'}`}>Home</button>
                        </Link>
                        <Link to={'/sectordevision'}>
                            <button className={`sub-1 normalButton w-full ${isActive('/sectordevision') && ' buttonActive'}`}>Section Devison</button>
                        </Link>
                        <Link to={'/teamup'}>
                            <button className={`sub-1 normalButton w-full ${isActive('/teamup') && ' buttonActive'}`}>Team & Partners</button>
                        </Link>
                        <Link to={'/new&docs'}>
                            <button className={`sub-1 normalButton w-full ${isActive('/new&docs') && ' buttonActive'}`}>New Docs</button>
                        </Link>
                    </div>
                    <div className="cursor-pointer col-span-2 sm:flex  sm:gap-1 ">
                        <button className="hidden sm:flex items-center normalButton  button-m h-fit   ">
                            Invest now{' '}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-5 h-5 ml-2">
                                <path
                                    fill="currentColor"
                                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"
                                ></path>
                            </svg>
                        </button>
                        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="bg-white  rounded-2xl p-5 w-[66px] h-[66px] xl:hidden">
                            <path fill="currentColor" fill-rule="evenodd" d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z" />
                        </svg>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-0 left-0 w-dvw p-5 bg-slate-800/40 backdrop-blur-xs sm:grid sm:grid-cols-2">
                    <div className="flex flex-col h-screen bg-[#1A2835]/50 rounded-2xl px-10 justify-center gap-5 sm:col-start-2 ">
                        <div className="grid grid-cols-4 gap-1 ">
                            <button className=" col-span-3 primaryButton button-m  w-full  ">Invest now</button>

                            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="bg-white rounded-2xl  p-5 w-[66px] h-[66px]">
                                <path
                                    fill="currentColor"
                                    d="M15.269 28.146a.5.5 0 0 1-.36-.153L7.55 20.362a.5.5 0 0 1 0-.693l7.391-7.662a.5.5 0 1 1 .72.693l-7.056 7.315l7.024 7.284a.5.5 0 0 1-.36.847"
                                ></path>
                                <path fill="currentColor" d="M32.09 20.516H7.91a.5.5 0 0 1 0-1h24.18a.5.5 0 0 1 0 1"></path>
                            </svg>
                        </div>
                        <hr className="text-white" />
                        <Link to={'/'} className="">
                            <button className={`sub-1 normalButton w-full ${isActive('/') && ' buttonActive'}`}>Home</button>
                        </Link>
                        <Link to={'/sectordevision'}>
                            <button className={`sub-1 normalButton w-full ${isActive('/sectordevision') && ' buttonActive'}`}>Section Devison</button>
                        </Link>
                        <Link to={'/teamup'}>
                            <button className={`sub-1 normalButton w-full ${isActive('/teamup') && ' buttonActive'}`}>Team & Partners</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
