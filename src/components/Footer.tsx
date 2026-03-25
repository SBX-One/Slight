export default function Footer() {
    return (
        <div className=" pb-10 sm:pb-20 contentPadding  bg-secondary h-fit text-white text-center overflow-hidden relative">
            <p className="text-[125px] sm:text-[216px] xl:text-[434px] font-bold absolute -translate-y-1/2 left-1/2 -translate-x-1/2">SLIGHT</p>
            <div className=" flex flex-col sm:grid sm:grid-cols-5 mt-30 sm:mt-46 xl:mt-110 xl:flex gap-40 ">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 col-span-3">
                    <div className=" flex justify-between text-sm xl:flex-col xl:justify-start xl:gap-5 ">
                        <p className="text-left ">
                            Let’s start a conversation <br /> about your brands
                        </p>
                        <p className="text-right xl:text-left">
                            slight@gmail.com <br />
                            +23456789012
                        </p>
                    </div>
                    <div className="text-left grid grid-cols-1 col-span-2 gap-5 list-none xl:grid-cols-4">
                        <li className=" ">
                            <p className="xl:border-l xl:px-1 xl:paragraph-1">TERMS & CONDITION</p>
                            <br />
                            <hr className="border-b border-slate-600 xl:hidden" />
                        </li>
                        <li className=" ">
                            <p className="xl:border-l xl:px-1 xl:paragraph-1">PRIVACY POLICY</p>
                            <br />
                            <hr className="border-b border-slate-600 xl:hidden" />
                        </li>
                        <li className=" ">
                            <p className="xl:border-l xl:px-1 xl:paragraph-1">ABOUT US </p>
                            <br />
                            <hr className="border-b border-slate-600 xl:hidden" />
                        </li>
                        <li className=" ">
                            <p className="xl:border-l xl:px-1 xl:paragraph-1">FAQ</p>
                            <br />
                            <hr className="border-b border-slate-600 xl:hidden" />
                        </li>
                    </div>
                </div>
                <div className="flex gap-1 justify-end sm:items-end sm:col-start-5 xl:gap-10 xl:mr-10">
                    <div className="flex items-center gap-5">
                        <div className="iconButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
                                <path fill="currentColor" d="M16 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></path>
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M17.258 2.833a47.7 47.7 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a46 46 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.8 47.8 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a46 46 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832m-10.35 1.49a46.2 46.2 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.4 44.4 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.2 46.2 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.4 44.4 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <p className="hidden xl:block paragraph-1">INSTAGRAM</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="iconButton ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
                                <path
                                    fill="currentColor"
                                    d="M5.25 4h13.5a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245zh13.5zM20.5 9.373l-8.15 4.29a.75.75 0 0 1-.603.043l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM18.75 5.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.474l8.5-4.475V7.25a1.75 1.75 0 0 0-1.607-1.744z"
                                ></path>
                            </svg>
                        </div>
                        <p className="hidden xl:block paragraph-1">MAIL</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="iconButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                ></path>
                            </svg>
                        </div>
                        <p className="hidden xl:block paragraph-1">FACEBOOK</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="iconButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
                                <path
                                    fill="currentColor"
                                    d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"
                                ></path>
                            </svg>
                        </div>
                        <p className="hidden xl:block paragraph-1">CALL </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
