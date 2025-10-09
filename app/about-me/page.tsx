import Link from 'next/link'

export default function Home() {
    return(
        <div className="relative overflow-hidden">

                <div className="lg:text-[9rem] text-really-light absolute lg:top-10 lg:left-35 text-left font-['loosBlack'] text-[3rem] top-[7dvw] left-[12dvw]">

                    <p>I</p>

                </div>

                <div className="absolute lg:w-1/2 lg:h-auto lg:top-[10dvw] lg:left-1/4 lg:right-0 sm:top-[20dvw] w-3/4 h-auto top-[25dvw] left-[12dvw]">

                    <p className=" font-['NewScience'] text-really-light lg:text-2xl sm:text-xl text-center">I am a polish freelance artist who focuses on creating digital 2D art by hand.<br/> Mainly inspired by 00s-10s animes such as 'Hetalia' and 'Girls und Panzer', I usually draw fanart for various shows and video games while often handling commissions.<br/>With art, I get to explore how colours work and express my thoughts and ideas that I wouldn't be able to without the medium.
                    <br/><br/>
                    While drawing, I enjoy listening to numerous music genres spanning across the 80s to present day such as brutal slam metal and jumpstyle. I tend to listen to a lot of punk rock and happy hardcore regardless of what I am doing, even if it is taking a walk in the park or playing video games.<br/> My personal favourite genres are splittercore and mashcore.</p>

                </div>

                <div className="absolute lg:bottom-20 lg:right-30 bottom-[10dvw] left-[12dvw] w-3/4 text-center sm:text-right">

                    <Link href="/" className="mr-5 text-really-light animate-pulse text-[2rem] font-['loosBlack'] hover:text-[#f7aa14]">Back</Link>

                </div>
                <div className="overflow-x-hidden">
                    <img src="/lineart1.png" alt="image-bg" className="absolute z-[-1] md:left-0 left-[-60vw] opacity-75 min-h-[50dvh] max-h-screen min-w-[50vw] max-w-fit"/>
                </div>
                <div className="bg-[#314098] h-screen w-screen relative z-[-2]"></div>
        
        </div>
    );
}