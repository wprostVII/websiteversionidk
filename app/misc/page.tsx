"use client"
import Link from 'next/link'
import { FaTwitter, FaPaw, FaTumblr, FaInstagram, FaSteamSymbol, FaTiktok, FaRedditAlien, FaGithub } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export default function Home() {
    return(
        <div className="relative overflow-hidden">

                <div className="lg:text-[9rem] text-really-light absolute lg:top-10 lg:left-28 text-left font-['loosBlack'] text-[3rem] top-[7dvw] left-[12dvw]">

                    <p>III</p>

                </div>

                <div className="absolute lg:w-1/2 lg:h-auto lg:top-[12dvw] lg:left-1/4 lg:right-0 sm:top-[21dvw] w-3/4 h-auto top-[25dvw] left-[12dvw]">

                    <p className=" font-['NewScience'] text-really-light lg:text-2xl sm:text-xl text-center"><br/>You may use my artwork for your profile picture, banner, wallpaper and/or inspiration but I do not wish for my art to be fed into AI nor be traced/fully copied.<br/><br/>DNI if you are under 16, I prefer to only interact with people around my age and older.<br/>I block freely.<br/><br/>You can contact/interact with me with these links below:</p>
                    
                    <div className='grid grid-cols-1 justify-items-center py-2 text-really-light'>
                        
                        <div className='grid grid-cols-4 lg:flex text-4xl justify-items-center px-[6dvw] gap-2'>
                            <Link href="https://x.com/wprost_VII">
                                <FaTwitter />
                            </Link>
                            <Link href="https://www.instagram.com/wprostvii/">
                                <FaInstagram />
                            </Link>
                            <Link href=" ">
                                <FaTiktok />
                            </Link>
                            <Link href="https://www.tumblr.com/wprostvii">
                                <FaTumblr />
                            </Link>
                            <Link href=" ">
                                <FaRedditAlien />
                            </Link>
                            <Link href=" ">
                                <FaBluesky />
                            </Link>
                            <Link href="https://steamcommunity.com/id/wprostvii/">
                                <FaSteamSymbol />
                            </Link>
                            <Link href=" ">
                                <FaGithub />
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="absolute lg:bottom-20 lg:right-30 bottom-[10dvw] left-[12dvw] w-3/4 text-center sm:text-right">

                    <Link href="/" className="mr-5 text-really-light animate-pulse text-[2rem] font-['loosBlack'] hover:text-[#8e8aff]">Back</Link>

                </div>
                <div className="overflow-x-hidden">
                    <img src="/lineart3.png" alt="image-bg" className="overflow-x-hidden fixed z-[-1] min-h-[50dvh] max-h-screen min-w-[50vw] max-w-fit top-0 left-[-70vw] sm:left-0 md:left-[7vw] lg:right-[0] lg:left-[dvw]"/>
                </div>
                <div className="bg-[#6b1aa5] h-screen w-screen relative z-[-2]"></div>
        
        </div>
    );
}