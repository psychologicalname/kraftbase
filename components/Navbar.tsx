'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//icons
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FiMenu, FiX } from 'react-icons/fi';

//constants
import { navData } from "@/constants/navLinks";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenuClick = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <div className="sticky top-0 z-50">
            <div className="hidden lg:block">
                <div className='bg-[#77896F] w-screen px-20 py-4 flex items-center justify-between'>
                    <div className='text-white flex items-center gap-1'>
                        <span>Our 'Yoga for Seniors' workshop is coming soon in Aug'24. Follow us on </span>
                        <div className="inline-flex items-center gap-2">
                            <RiTwitterXFill />
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedinIn />
                            <FaWhatsapp />
                        </div>
                        <span> for further details </span>
                    </div>
                    <button type="button" className="flex items-center justify-between gap-2 text-white">
                        <span>Join our workshop</span>
                        <BsArrowUpRightCircle />
                    </button>
                </div>
                <nav className="flex items-center justify-between px-32 py-8 bg-white">
                    <div className="flex space-x-6 font-medium">
                        {navData.map((item, index) => (
                            index < 2 && (
                                <Link key={index} href={item.link} className="">{item.title}</Link>
                            )
                        ))}

                    </div>

                    <div className="relative w-12 h-8">
                        <Image src="/assets/logo.jpeg" alt="Samatva Life" className="object-contain" fill />
                    </div>

                    <div className="flex space-x-6 font-medium">
                        {navData.map((item, index) => (
                            index >= 2 && (
                                <Link key={index} href={item.link} className="">{item.title}</Link>
                            )
                        ))}

                    </div>
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden block">
                <div className='bg-[#77896F] w-screen px-16 py-4 text-white flex flex-col items-center gap-4 text-xs'>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula,</p>
                    <button type="button" className="flex items-center justify-between gap-2 text-white">
                        <span>Join our free classes</span>
                        <BsArrowUpRightCircle />
                    </button>
                </div>
                <nav className="flex items-center justify-between py-4 px-6 md:px-12 bg-white">
                    <div className="relative w-12 h-8">
                        <Image src="/assets/logo.jpeg" alt="Samatva Life" className="object-contain" fill />
                    </div>
                    <div className="lg:hidden">
                        <button onClick={handleMenuClick}>
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </nav>
                {menuOpen && (
                    <div className="lg:hidden right-0 bg-neutral-100 rounded-l-[2rem] p-4 z-50 absolute">
                        {navData.map((item, index) => (
                            <Link key={index} href={item.link} className="block p-2" onClick={handleMenuClick}>{item.title}</Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
