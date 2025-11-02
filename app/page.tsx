import Link from 'next/link'

export default function Enter() {
  return (
      
      <div className="relative">

        <div className="static">
          
          <div className="absolute bottom-20 right-5 md:right-10 text-right text-custom-black z-40">

            <p className="font-['angelWish'] text-shadow-(--custom-shadow) sm:text-shadow-none text-[6rem] md:text-[8rem]">wprostVII</p>
            <p className="font-['newScience'] text-shadow-(--custom-shadow) sm:text-shadow-none text-lg md:text-xl">also known as "Cement Mix"</p>
            
            <Link href="/home" className="mr-5 font-['loosBlack'] text-shadow-(--custom-shadow) sm:text-shadow-none  hover:text-crimson-maybe">Enter</Link>
      
          </div>

          <img src="/wiggle.webp" alt="knight standing" className="overflow-x-hidden fixed min-h-[50dvh] max-h-screen min-w-[50dvh] max-w-fit top-0 left-[-50vw] sm:left-[-20vw] md:inset-0"/>
          
        </div>

        <div className="bg-custom-black bg-[url(/bg.png)] bg-cover min-w-screen min-h-screen"/>

      </div>

  );
}
