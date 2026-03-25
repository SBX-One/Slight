function Herocard() {
    return (
        <div className="p-5 bg-background border border-black/20 rounded-4xl grid grid-cols-1 gap-5 ">
            <div>
                <p className=" text-secondary/30 text-start  mb-3">Route</p>
                <div className="flex gap-1 hover:cursor-pointer w-full h-fit">
                    <input type="text" className="border border-black/20 p-5 rounded-xl w-full h-full col-span-3" placeholder="Input text" />
                    <div className="border border-black/20 rounded-xl cursor-pointer flex items-center justify-center px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6  text-secondary/30">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                <path d="m19 11l-7 6l-7-6"></path>
                                <path d="m19 7l-7 6l-7-6"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <p className=" text-secondary/30 text-start  mb-3">Container Size</p>
                <div className="flex gap-1 hover:cursor-pointer w-full h-fit">
                    <input type="text" className="border border-black/20 p-5 rounded-xl w-full h-full col-span-3" placeholder="Input text" />
                    <div className="border border-black/20 rounded-xl cursor-pointer flex items-center justify-center px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6  text-secondary/30">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                <path d="m19 11l-7 6l-7-6"></path>
                                <path d="m19 7l-7 6l-7-6"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <p className=" text-secondary/30 text-start  mb-3">Contract Length</p>
                <div className="flex gap-1 hover:cursor-pointer w-full h-fit">
                    <input type="text" className="border border-black/20 p-5 rounded-xl w-full h-full col-span-3" placeholder="Input text" />
                    <div className="border border-black/20 rounded-xl cursor-pointer flex items-center justify-center px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6  text-secondary/30">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                <path d="m19 11l-7 6l-7-6"></path>
                                <path d="m19 7l-7 6l-7-6"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <p className=" text-secondary/30 text-start  mb-3">Numbers Of Tickets</p>
                <div className="flex gap-1 hover:cursor-pointer w-full h-fit">
                    <input type="text" className="border border-black/20 p-5 rounded-xl w-full h-full col-span-3" placeholder="Input text" />
                </div>
            </div>

            <div className=" items-center button-xs">
                <button className="primaryButton w-full text-center ">
                    <div className="flex gap-3 justify-center">
                        <p>Calculate</p>
                        <p>→</p>
                    </div>
                </button>
            </div>
            <div className="flex flex-col gap-5 sm:hidden lg:flex">
                <hr className="text-secondary/30"/>
                <div className="flex justify-between sub-2">
                    <p className=" text-secondary/30">Expected Income:</p>
                    <p>120.000 USD</p>
                </div>
                <div className="flex justify-between sub-2">
                    <p className=" text-secondary/30">Expected Income:</p>
                    <p>120.000 USD</p>
                </div>
            </div>
        </div>
    );
}

export default Herocard;
