import type { Metadata } from "next";
import Link from 'next/link';
import SnowFalling from '../extras/snow';

export const metadata: Metadata = {
  title: "Art",
};

export default function artPage() {
  return (
    <div className="bg-[url(/bg4.png)] bg-cover flex justify-center items-center h-screen w-screen z-0 overflow-hidden">
        <div className="absolute block w-screen h-screen z-1">
                <SnowFalling />
        </div>
        <div className="bg-colour4 sm:shadow-[0px_0_20px_rgba(0,0,0,0.5)] w-screen sm:w-6/7 md:w-3/4 lg:w-1/2 lg:w-min-1/2 h-screen z-2">
            
            <div className="flex justify-center items-center h-1/8">
                <div className="flex justify-start items-end pl-2 bg-colour3 w-5/7 h-2/3">
                <p className="font-[loosBlack] text-colour4 text-5xl">Art</p>
                    <div className="flex justify-end items-end pr-2 w-full">
                        <p className="font-[newScience] text-colour5 text-2xl">:D</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-1 w-full h-4/5">
                <div className="grid my-2 ml-2 gap-1 grid-rows-2">
                    <div className="flex flex-col bg-colour3 border-2 border-colour2 font-[ubuntu]">
                        <p className="flex p-1 font-[newScience] bg-colour2 text-colour5">Navigation</p>
                        <Link href="/home" className="text-colour5 px-1 p-[3px] transition ease-in-out hover:bg-crimson-maybe hover:italic">≫ Home</Link><br/>
                        <Link href="/about-me" className="text-colour5 px-1 p-[3px] transition ease-in-out hover:bg-crimson-maybe hover:italic">≫ About Me</Link><br/>
                        <Link href="/art" className="text-colour5 px-1 p-[3px] transition ease-in-out hover:bg-crimson-maybe hover:italic">≫ Art</Link>
                    </div>
                    <div className="flex flex-col bg-colour3 border-colour2 border-2">
                        <p className="flex p-1 px-1 font-[newScience] text-colour5 bg-colour2">My Socials</p>
                        <div className="flex flex-col font-[ubuntu] text-colour5">
                            <Link href="https://x.com/wprost_VII" className="transition ease-in-out px-1 p-[3px] hover:bg-crimson-maybe hover:italic">
                                ≫ Xitter
                            </Link>
                            <Link href="https://www.instagram.com/wprostvii/" className="transition ease-in-out px-1 p-[3px] hover:bg-crimson-maybe hover:italic">
                                ≫ Instagram
                            </Link>
                            <Link href="https://www.tiktok.com/@wprostvii" className="transition ease-in-out px-1 p-[3px] hover:bg-crimson-maybe hover:italic">
                                ≫ Tiktok
                            </Link>
                            <Link href="https://www.tumblr.com/wprostvii" className="transition ease-in-out px-1 p-[3px] hover:bg-crimson-maybe hover:italic">
                                ≫ Tumblr
                            </Link>
                            <Link href="https://www.reddit.com/user/wprostVII/" className="transition ease-in-out px-1 p-[3px] hover:bg-crimson-maybe hover:italic">
                                ≫ Reddit
                            </Link>
                            <Link href="https://wprostvii.straw.page" className="transition ease-in-out px-1 p-[3px] hover:bg-crimson-maybe hover:italic">
                                ≫ Strawpage
                            </Link>
                            <Link href="https://steamcommunity.com/id/wprostvii/" className="transition ease-in-out px-1 p-[3px] hover:bg-crimson-maybe hover:italic">
                                ≫ Steam
                            </Link>
                            <Link href="https://github.com/wprostVII" className="transition ease-in-out px-1 p-[3px] pb-[5px] hover:bg-crimson-maybe hover:italic">
                                ≫ Github
                            </Link>
                        </div>
                            
                    </div>
                            
                </div>

                <div className="my-2 ml-5 mr-2 xs:ml-0 lg:ml-0 xs:mr-2 col-span-4 grid-rows-2 overflow-hidden">
                    
                    <div className="grid grid-cols-2 h-4/7 gap-1 pb-1">
                        
                        <div className="grid col-span-1 grid-rows-2 gap-1 overflow-hidden">
                            
                            <div className="row-span-1 inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                    <p className="titleSide">Prices</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <p className="textMove font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">My prices are... pay what you want! Essentially, you as the client get to choose how much you pay me!</p>
                                <p className="textSide font-[ubuntu] text-colour4 sm:text-base pt-1 px-2">Minimum $15</p>
                            </div>
                            <div className="row-span-1 inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                    <p className="titleSide">TAT</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <p className="textMoveThree font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">Please be patient with me! It usually takes me 2 weeks to complete an artwork since I have a lot of college work to do</p>
                            </div>

                        </div>

                        <div className="grid col-span-1 grid-rows-3 gap-1 overflow-hidden">
                            
                            <div className="row-span-2 inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                    <p className="titleSideTwo">TOS</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <p className="textMoveFour font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">I don&apos;t do refunds unless I cancel the commission and if I do cancel, I will refund 100%<br/>I accept payment after sketch<br/>I only accept paypal, kofi, and steam games/credit</p>
                            </div>
                            <div className="row-span-1 inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                    <p className="titleSideTwo">Blinkies</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <div className="marquee flex justify-center items-center pt-5 gap-1 whitespace-nowrap">
                                    <img src="https://i.postimg.cc/Dm3GSCRV/city17.webp" className="w-[150px]"/>
                                    <img src="https://i.postimg.cc/0r1Szthv/gordon-freeman.webp" className="w-[150px]"/>
                                    <img src="https://i.postimg.cc/G9nD4M6C/hang-your-at.gif" className="w-[150px]"/>
                                    <img src="https://i.postimg.cc/K4hT19Cv/IMG-5286.gif" className="w-[150px]"/>
                                    <img src="https://i.postimg.cc/fkQdVH1W/poland.gif" className="w-[150px]"/>
                                    <img src="https://i.postimg.cc/jSQ9FFb3/tumblr-b65daede675dd41594686d5b9c96c84e-fa766e0c-250.webp" className="w-[150px]"/>
                                    <img src="https://i.postimg.cc/Sjb9nZHk/scissor-blinkie.gif" className="w-[150px]"/>
                                    <img src="https://i.postimg.cc/jCYfD8BS/tumblr-4ad6885e96c2bc10a9c2cff7ef73b69d-7917dac2-250.webp" className="w-[150px]"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-3 h-3/7 gap-1">

                        <div className="col-span-3 inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                            <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                    <p className="titleSideThree">Prices</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <p className="textMoveFive font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">If you want to view more of my art examples, click <a href="https://toyhou.se/28047745.art-examples" className="text-colour4 hover:italic hover:bg-crimson-maybe hover:text-colour5">here! ‌</a></p>
                                <div className="flex justify-center items-center m-12 gap-3">
                                    <a href="https://f2.toyhou.se/file/f2-toyhou-se/images/109600336_wANq7ZKAcRipHFj.png"><img src="https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/109600336_wAN.png" className="bounce border-2 border-colour5 h-[50px] w-[50px] lg:h-[90px] lg:w-[90px] shadow-lg shadow-black/50 transition hover:ease-in-out hover:scale-120"/></a>
                                    <a href="https://f2.toyhou.se/file/f2-toyhou-se/images/91239725_lAcaDetyofjZMwg.png"><img src="https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/91239725_lAc.png" className="bounce border-2 border-colour5 h-[50px] w-[50px] lg:h-[90px] lg:w-[90px] shadow-lg shadow-black/50 transition hover:ease-in-out hover:scale-120" style={{animationDuration: '9s'}}/></a>
                                    <a href="https://f2.toyhou.se/file/f2-toyhou-se/images/109078725_xJCW5dVIdCgjEH0.png"><img src="https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/109078725_xJC.png" className="bounce border-2 border-colour5 h-[50px] w-[50px] lg:h-[90px] lg:w-[90px] shadow-lg shadow-black/50 transition hover:ease-in-out hover:scale-120" style={{animationDuration: '10s'}}/></a>
                                    <a href="https://f2.toyhou.se/file/f2-toyhou-se/images/111714767_QeMoz9I4G6nbx7H.png"><img src="https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/111714767_QeM.png" className="bounce border-2 border-colour5 h-[50px] w-[50px] lg:h-[90px] lg:w-[90px] shadow-lg shadow-black/50 transition hover:ease-in-out hover:scale-120" style={{animationDuration: '11s'}}/></a>
                                    <a href="https://f2.toyhou.se/file/f2-toyhou-se/images/99909220_CkDT7mYfLznvpZo.png"><img src="https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99909220_CkD.png" className="bounce border-2 border-colour5 h-[50px] w-[50px] lg:h-[90px] lg:w-[90px] shadow-lg shadow-black/50 transition hover:ease-in-out hover:scale-120" style={{animationDuration: '12s'}}/></a>
                                </div>
                        </div>

                    </div>

                </div>

                 
            </div>
            <div className="grid grid-rows-5">
                <p className="flex justify-center items-center pt-5 sm:pt-2 font-[newScience] text-[10px] sm:text-base text-colour5">Copyright © wprostVII 2025. All rights reserved. // Website Version 4.0</p>
            </div> 
             
        </div>
    </div>
  );
}
