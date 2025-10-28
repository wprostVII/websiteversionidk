import type { Metadata } from "next";
import Link from 'next/link';
import SnowFalling from '../extras/snow';

export const metadata: Metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <div className="bg-[url(/bg2.png)] bg-cover flex justify-center items-center h-screen w-screen z-0 overflow-hidden">
        <div className="absolute block w-screen h-screen z-1">
                <SnowFalling />
        </div>
        <div className="bg-colour4 sm:shadow-[0px_0_20px_rgba(0,0,0,0.5)] w-screen sm:w-6/7 md:w-3/4 lg:w-1/2 lg:w-min-1/2 h-screen z-2">
            
            <div className="flex justify-center items-center h-1/8">
                <div className="flex justify-end items-end pr-2 bg-[url(/knightkneel.png)] bg-cover bg-right w-6/7 h-2/3">
                <p className="font-[loosBlack] text-colour5 text-2xl">wprostVII</p>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-1 w-full h-4/5">
                <div className="grid my-2 ml-2 gap-1 grid-rows-2">
                    <div className="flex flex-col gap-1 bg-colour3 px-1 font-[ubuntu]">
                        <p className="flex pt-2 pb-1 font-[newScience] text-colour5">Navigation</p>
                        <Link href="/home" className="text-colour5 transition ease-in-out hover:bg-crimson-maybe">Home</Link><br/>
                        <Link href="/home" className="text-colour5 transition ease-in-out hover:bg-crimson-maybe">About Me</Link><br/>
                        <Link href="/home" className="text-colour5 transition ease-in-out hover:bg-crimson-maybe">Art</Link>
                    </div>
                    <div className="flex flex-col bg-colour3 gap-2">
                        <p className="flex pt-2 px-1 font-[newScience] text-colour5">My Socials</p>
                        <div className="flex flex-col gap-1 px-1 font-[ubuntu] text-colour5">
                            <Link href="https://x.com/wprost_VII" className="transition ease-in-out hover:bg-crimson-maybe">
                                Xitter
                            </Link>
                            <Link href="https://www.instagram.com/wprostvii/" className="transition ease-in-out hover:bg-crimson-maybe">
                                Instagram
                            </Link>
                            <Link href=" " className="transition ease-in-out hover:bg-crimson-maybe">
                                Tiktok
                            </Link>
                            <Link href="https://www.tumblr.com/wprostvii" className="transition ease-in-out hover:bg-crimson-maybe">
                                Tumblr
                            </Link>
                            <Link href=" " className="transition ease-in-out hover:bg-crimson-maybe">
                                Reddit
                            </Link>
                            <Link href=" " className="transition ease-in-out hover:bg-crimson-maybe">
                                Blusky
                            </Link>
                            <Link href="https://steamcommunity.com/id/wprostvii/" className="transition ease-in-out hover:bg-crimson-maybe">
                                Steam
                            </Link>
                            <Link href=" " className="transition ease-in-out hover:bg-crimson-maybe">
                                Github
                            </Link>
                        </div>
                            
                    </div>
                            
                </div>

                <div className="my-2 ml-5 mr-2 xs:ml-0 lg:ml-0 xs:mr-2 col-span-4 grid-rows-2 overflow-hidden">

                    <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 h-4/7">
                        <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out ">
                            <p className="titleSide">About me</p>
                            <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                        </div>
                        <div className="h-full overflow-hidden text-[13px] sm:text-base">
                            <p className="textMove font-[ubuntu] text-colour5 pt-1 px-2">Welcome to my little corner of the internet! ˎˊ˗</p>
                            <p className="textMoveTwo font-[ubuntu] text-colour4 px-2">Feel free to navigate around my website</p>
                            <p className="textSide font-[ubuntu] text-colour5 px-2">The name's Prost but most prefer to call me Cement Mix<br/>AroAce Agender Male . xe//xir//pup//it . Eng//Pol<br/>I am a furry raver + metalhead who is also a self taught anime artist and a relatively new front-end dev.<br/>.ᐟ You can get to know me better by clicking on my "about me" page</p>
                            <p className="textMoveThree font-[ubuntu] text-colour4 px-2 italic">This site is best view'd on desktop, however it is somewhat suitable for mobile</p>   
                        </div>
                        
                    </div>

                    <div className="grid h-3/7 pt-1 grid-cols-3 gap-1"> 
                       
                        <div className="grid col-span-2 grid-row-3 gap-1 overflow-hidden">
                            <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 row-span-2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 pl-2 items-center grid grid-cols-2 overflow-hidden border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out ">
                                    <p className="titleSideTwo">Kin List</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <p className="textMoveFour font-[ubuntu] text-colour5 text-[13px] sm:text-base px-2 pt-1">I kin.... Travis Bickle (Taxi Driver), Kuromi (My Melody), Donnie Darko (Donnie Darko), Tyler Durden (Fight Club), Rainbow Dash (MLP)</p>
                            </div>
                            <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2 overflow-hidden">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 items-center pl-2 grid grid-cols-2 border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out ">
                                    <p className="titleSideThree">Stamps</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                                <div className="marquee flex justify-center items-center pt-2 gap-1 whitespace-nowrap">
                                    <img src="https://i.postimg.cc/9Qxn2nLG/peter.gif" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/MpZFhSmn/lmaooo.png" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/TPpH3Js9/gman-hehe.webp" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/4x8SGSW8/ehhahaha.webp" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/t4RMLjNY/tumblr-8db257366fc8585c17164cf803edc194-7d010181-100.jpg" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/SxZv4vgz/d9qkrcc-56d1d473-812a-4c0c-bba1-1be067863171.png" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/SxQvwhf8/308d7d92.gif" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/Gm35ZCxv/748a0067.png" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/htC5n52Q/bad-apple.webp" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/vZ8Npstm/problem-detected.gif" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/T3k4x4ts/the-thing-idk.webp" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/bw6BPBm0/tumblr-321c12238b371cb299e99140d7735c53-63fb669e-250.webp" className="w-[90px]"/>
                                    <img src="https://i.postimg.cc/mgd545mK/MR-WHITE.webp" className="w-[90px]"/>
                                </div>
                                
                            </div>
                        </div>
                       
                        <div className="inset-shadow-sm inset-shadow-colour1 bg-linear-to-b from-colour1 to-colour2">
                                <div className="bg-colour3 text-colour5 font-[newScience] pt-1 pb-1 items-center pl-2 grid grid-cols-2 border-l-2 border-t-2 border-r-2 border-colour1 transition hover:bg-colour4 duration-300 ease-in-out ">
                                    <p className="titleSideTwo">My Button</p>
                                    <p className="flex justify-end items-end pr-2">⋮⋮⋮⋮</p>
                                </div>
                            <p className="textMoveFive font-[ubuntu] text-colour5 px-2 pt-1">Add my button to your site!</p>
                            <div className="flex justify-center items-center pt-5">
                                <img src="https://i.ibb.co/GQxFwGmQ/button-finally.gif" alt="Button Image" className="w-[81px]"/>
                            </div>
                            <div className="flex justify-center items-center pt-5">
                                <label className="flex justify-center items-center">
                                    <textarea name="88x31 button link" defaultValue={'<img src="https://i.ibb.co/GQxFwGmQ/button-finally.gif" alt="wprostVII-button" border="0">'} className="textMoveSix h-1/5 w-3/4 px-1 resize-none border-2 border-colour1 bg-colour3 text-custom-black"/>
                                </label>
                                
                            </div>
                            
                            
                            
                        </div>

                    </div>
                </div>
                
            </div>
            
             <p className="flex justify-center items-center pt-5 sm:pt-2 font-[newScience] text-[10px] sm:text-base text-colour5">Copyright © wprostVII 2025. All rights reserved. // Website Version 4.0</p>
        </div>
    </div>
  );
}
