export default function Home() {
    return (
        <main>

            {/* Header */}
            <div className={"fixed flex justify-center items-center w-screen gap-16 h-16 font-bold"}>
                <span className={"hover:text-gray-500"}>portfolio</span>
                <span className={"hover:text-gray-500"}>about</span>
                <span className={"hover:text-gray-500"}>contact</span>
            </div>

            {/* Name section */}
            <div>
                <div className={"flex justify-between items-center w-screen p-10 pt-20"}>
                    <h1 className={"text-9xl font-extrabold"}>NOLAN</h1>
                    <img src={"https://framerusercontent.com/images/7pK0QrLlKy390Qs8FadnwPTqts.png?scale-down-to=1024"}
                         alt={"img1"} className={"w-2/6"}/>
                </div>

                <div className={"flex justify-center items-center w-screen flex-col"}>
                    <span className={"text-xl font-bold"}>MELBOURNE, AUSTRALIA</span>
                    <span className={"text-xl font-bold"}>37.8136° S, 144.9631° E</span>
                </div>

                <div className={"flex justify-between items-center w-screen p-10 pt-20"}>
                    <img src={"https://framerusercontent.com/images/16Rx6Rm8Wa2Dq7bs97DMY2Nwc.jpg?scale-down-to=512"}
                         alt={"img1"} className={"w-2/6"}/>
                    <h1 className={"text-9xl font-extrabold"}>MITCHELL</h1>
                </div>
            </div>


            {/* Velkej obrázek */}
            <div className={"flex justify-center items-center p-10"}>
                <img src={"https://framerusercontent.com/images/LfnFf6aTqcNN4wzDwcP5znUPT6I.png?scale-down-to=2048"}
                     alt={"bigimg"}/>
            </div>

            {/* Welcome Banner */}
            <div className={"flex justify-between items-center w-screen p-10 pt-0"}>
                <h1 className={"text-6xl font-bold"}>WELCOME</h1>
                <span className={"w-2/6 text-xs text-right"}>Hello and a heartfelt welcome, I'm Nolan Mitchell, your trusted real estate guide in the vibrant city of Melbourne. Whether you're a seasoned investor, a first-time homebuyer, or simply looking for your dream property, I'm here to make your real estate journey seamless and successful.</span>
            </div>

            {/* Featured Products */}
            <div className={"flex justify-center items-center pt-20"}>
                <h1 className={"text-6xl font-bold"}>FEATURED PRODUCTS</h1>
            </div>

            <div className={"relative"}>
                <div className={"flex justify-around items-center w-screen p-10"}>
                    <img src={"https://framerusercontent.com/images/UAXWttkl97SU7ZJ6t2Ltbtm3v0.jpg?scale-down-to=512"}
                         alt={"first-product"} className={"w-2/6 h-[500px] object-cover"}/>
                    <div className={"flex flex-auto justify-between items-center p-5 text-sm font-bold"}>
                        <div className={"flex flex-auto flex-col"}>
                            <span>25 Framer Rd, St Kilda,</span>
                            <span>VIC, 3182</span>
                        </div>
                        <span>FOR SALE</span>
                    </div>
                </div>
                <span
                    className={"absolute right-6 bottom-10 text-sm font-bold hover:text-gray-500"}>(VIEW PROPERTY)</span>
            </div>

            <div className={"relative"}>
                <div className={"flex justify-around items-center w-screen p-10"}>
                    <div className={"flex flex-auto justify-between items-center p-5 text-sm font-bold"}>
                        <div className={"flex flex-auto flex-col"}>
                            <span>18 Framer Rd, St Kilda,</span>
                            <span>VIC, 3182</span>
                        </div>
                        <span>FOR SALE</span>
                    </div>
                    <img src={"https://framerusercontent.com/images/ssXwoHoJWI5slRVhPrjLhjQFRIw.jpg?scale-down-to=512"}
                         alt={"first-product"} className={"w-2/6 h-[500px] object-cover"}/>
                </div>
                <span
                    className={"absolute left-14 bottom-10 text-sm font-bold hover:text-gray-500"}>(VIEW PROPERTY)</span>
            </div>

            <div className={"relative"}>
                <div className={"flex justify-around items-center w-screen p-10"}>
                    <img src={"https://framerusercontent.com/images/gRIsS7b7H7QhFCmWRl88B6uVZMQ.jpg?scale-down-to=512"}
                         alt={"first-product"} className={"w-2/6 h-[500px] object-cover"}/>
                    <div className={"flex flex-auto justify-between items-center p-5 text-sm font-bold"}>
                        <div className={"flex flex-auto flex-col"}>
                            <span>52 Framer Rd, St Kilda,</span>
                            <span>VIC, 3182</span>
                        </div>
                        <span>FOR SALE</span>
                    </div>
                </div>
                <span
                    className={"absolute right-6 bottom-10 text-sm font-bold hover:text-gray-500"}>(VIEW PROPERTY)</span>
            </div>

            {/* Info about me */}
            Odkaz: https://nolanmitchell.framer.website/


            {/* Socials */}
            <div className={"flex justify-between items-center p-10 pt-0 pb-0"}>
                <h1 className={"text-7xl font-bold w-1/6"}>NOLAN MITCHELL</h1>

                <div className={"flex flex-col font-bold gap-2"}>
                    <span>LinkedIn</span>
                    <span>Instagram</span>
                    <span>X (Twitter)</span>
                </div>

                <div className={"flex justify-center items-center flex-col"}>
                    <span className={"font-bold text-sm"}>Melbourne, AUS</span>
                    <span className={"text-sm"}>9:59 AM</span>
                </div>
            </div>
        </main>
    );
}
