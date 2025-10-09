import Link from 'next/link'

export default function Home() {
    return(
        <div className="relative overflow-hidden h-screen w-screen">

                <div className="lg:text-[9rem] text-really-light absolute lg:top-10 lg:left-35 md:text-[6rem] text-left font-['loosBlack'] text-[3rem] top-[7dvw] left-[12dvw]">

                    <p>II</p>

                </div>

                <div className="grid grid-cols-1 justify-items-center lg:mt-[20dvh] mt-[15dvh]">
                    
                    <div className="lg:w-1/2 lg:h-auto lg:top-[10dvw] sm:top-[19dvw] w-3/4 h-auto ">

                        <p className=" font-['NewScience'] text-really-light lg:text-2xl sm:text-xl text-center">My commissions are always opened!<br/><br/>My prices are 'PWYW' (pay what you want), essentially you as the client get to choose how much you pay me.<br/>I can draw humans, furries, OCs, fandoms, etc.<br/>Minimum payment: $15 usd<br/><br/>Some of these artworks may be a little old therefore they might be slightly inconsistent in terms of artstyle.</p>

                    </div>
                    
                </div>
               <div className="grid grid-cols-1 justify-items-center">
                    <div className="grid grid-cols-5 lg:flex bottom-[20dvw] lg:bottom-[11.5dvw] mt-[10dvw] sm:mt-[5dvw] lg:px-[1dvw] lg:mt-[3.5dvw] sm:w-8/9 md:w-3/4 justify-items-center px-[6dvw] gap-2">

                        <a href="/artstuff/art1.png">
                        <img src="/iconstuff/icon1thing.png" alt="Icon 1" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art2.png">
                        <img src="/iconstuff/icon2thing.png" alt="Icon 2" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art3.png">
                        <img src="/iconstuff/icon3thing.png" alt="Icon 3" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art4.png">
                        <img src="/iconstuff/icon4thing.png" alt="Icon 4" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art5.png">
                        <img src="/iconstuff/icon5thing.png" alt="Icon 5" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art6.png">
                        <img src="/iconstuff/icon6thing.png" alt="Icon 6" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art7.png">
                        <img src="/iconstuff/icon7thing.png" alt="Icon 7" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art8.png">
                        <img src="/iconstuff/icon8thing.png" alt="Icon 8" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art9.png">
                        <img src="/iconstuff/icon9thing.png" alt="Icon 9" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                        <a href="/artstuff/art10.png">
                        <img src="/iconstuff/icon10thing.png" alt="Icon 10" className="w-full h-auto border-3 border-really-light"/>
                        </a>

                    </div>

               </div>
                
                <div className="absolute sm:bottom-[7dvh] md:bottom-[5dvh] lg:bottom-[10dvh] bottom-[10dvh] lg:right-30 left-[12dvw] w-3/4 text-center sm:text-right">

                    <Link href="/" className="mr-5 text-really-light animate-pulse text-[2rem] font-['loosBlack'] hover:text-[#f4ed16]">Back</Link>

                </div>

                <img src="/lineart2.png" alt="image-bg" className="overflow-x-hidden fixed z-[-1] min-h-[50dvh] max-h-screen min-w-[50vw] max-w-fit top-0 left-[-50vw] sm:left-0 md:left-[7vw] lg:right-[0] lg:left-[50dvw]"/>
            

                <div className="bg-[#2f7e21] fixed h-screen w-screen top-0 left-0 z-[-2]"/>
        </div>
    );
}