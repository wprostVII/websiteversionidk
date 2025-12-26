import type { Metadata } from "next";
import Link from 'next/link';
import SnowFalling from '../extras/snow';

export const metadata: Metadata = {
  title: "About Me",
};

export default function aboutMe() {
  return (
    <div className="bg-[url(/bg3.png)] bg-cover flex justify-center items-center h-screen w-screen z-0 overflow-hidden">
        <div className="absolute block w-screen h-screen z-1">
                <SnowFalling />
        </div>
        <div className="bg-colour4 sm:shadow-[0px_0_20px_rgba(0,0,0,0.5)] w-screen sm:w-6/7 md:w-3/4 lg:w-1/2 lg:w-min-1/2 h-screen z-2">
            
            <div className="flex justify-center items-center h-1/8">
                <div className="flex justify-start items-end pl-2 bg-colour3 w-5/7 h-2/3">
                <p className="font-[loosBlack] text-colour4 text-5xl">AboutMe</p>
                    <div className="flex justify-end items-end pr-2 w-full">
                        <p className="font-[newScience] text-colour5 text-2xl">:P</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-1 w-full h-4/5 overflow-hidden">
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
                    
                    <div className="grid grid-cols-3 h-4/9 gap-1">
                        
                        <div className="grid col-span-2 overflow-hidden">

                            <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 row-span-2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                    <p className="titleSide">About me</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <p className="textMove font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">I enjoy making new friends on the internet and playing video games on my laptop :3 <br/>Feel free to talk to me on <a href="https://discord.gg/sm7tJJDsdP" className="text-colour4 hover:italic hover:bg-crimson-maybe hover:text-colour5">discord! </a>‌<br/><br/>I love playing Gmod and Roblox (specifically arsenal and royale high)<br/>I am heavily into Hetalia, Postal 2, and Half Life (1 + 2)</p>
                            </div>

                        </div>

                        <div className="grid gap-1 grid-rows-2 overflow-hidden">
                            
                            <div className="grid col-span-1 row-span-1 overflow-hidden inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                                
                                <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 row-span-2">
                                    <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                        <p className="titleSideTwo">Likes</p>
                                        <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                    </div>
                                    <p className="textSideTwo font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">Time with riends, napoleonka, steak, colour camo green</p>
                                </div>

                            </div>
                            <div className="grid col-span-1 row-span-1 inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                                
                                <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 row-span-2">
                                    <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                        <p className="titleSideTwo">Dislikes</p>
                                        <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                    </div>
                                    <p className="textSideTwo font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">Veggies, being alone</p>
                                </div>

                            </div>

                        </div>
                        
                        
                    </div>

                    <div className="grid grid-cols-3 h-3/9 pt-1 pb-1 gap-1">
                        
                        <div className="grid col-span-1 gap-1">
                            
                            <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 row-span-2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                    <p className="titleSideThree">Movies</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <p className="textSide font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">My top favourite movies are... Taxi driver, Goodfellas, Pulpfiction, Chappie</p>
                            </div>
                                
                        </div>
                        <div className="grid col-span-2 gap-1">
                            
                            <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 row-span-2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                    <p className="titleSideThree">Music</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <p className="textMoveThree font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">My favourite genres are... Speedbreak, Polcore, Mashcore, Slamming Brutal Death Metal<br/><br/>You can view some of the rave songs that I listen to over <a href="https://youtube.com/playlist?list=PL9YTIxNYQZZPmXBVXc-lo_Ne-BKxYZ42e&si=y_8aZ9Fv_ioQtEAf" className="text-colour4 hover:italic hover:bg-crimson-maybe hover:text-colour5">here </a>‌‌</p>
                            </div>
                            
                        </div>

                    </div>

                    <div className="grid col-span-3 h-2/9 inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                        
                        <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 row-span-2">
                            <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out">
                                <p className="titleSideFour">Buttons</p>
                                <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                            </div>
                            <div className="marquee flex justify-center items-center pt-6 gap-1 whitespace-nowrap">
                                <img src="https://i.postimg.cc/ZK9Pvw4r/7768fba7-original.png" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/J4y3HpM3/a34.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/HsJ086dw/html.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/tC1dnBpW/steam.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/zGQcRxLw/css2.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/MHT6dWwY/vscbutton.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/Z5QMyw96/hl.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/zGQcRxLk/jail.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/Z5QMyw9x/lapfoxblackstatic.png" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/NjnzrdyD/netnow3.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/4x0ShWK6/postal-2.jpg" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/bw5B2mGm/rar-download.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/JzF2BpyP/Rave-Now3.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/52rRFsH3/twopaws.png" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/jjygDNGz/button215.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/8z2XkwnH/tumblr-48ccecfe9a3d1ec8f5ae2bfe0904d274-95112908-100.webp" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/FHMCFGnp/tumblr-ac53700384841a587cabcdfeb4b1b99d-3f1ae1a6-100.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/g2Ctc4BH/tumblr-ade6ad59055cbe095d6eba7f68308431-2fec4cc5-100.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/xdLxXHWg/tumblr-baf12c2ca900aa0ea725adf8c062e16e-1ed1b456-100.gif" className="w-[90px]"/>
                                <img src="https://i.postimg.cc/P5gVfKFN/tumblr-f520c54c82150eaa382d8c2c8f34f1d6-7c5fbbd1-100.webp" className="w-[90px]"/>
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
