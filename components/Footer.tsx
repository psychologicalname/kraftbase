import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

//constants
import { footerLinks } from '@/constants/footerLinks';

const Footer = () => {
    return (
        <footer id='contact' className="py-8">
            <div className="">
                <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:justify-between">
                    <div className="mb-12 md:mb-0 md:w-1/4">
                        <div className="relative w-12 h-8 mx-auto md:mx-0">
                            <Image src="/assets/logo.jpeg" alt="Samatva Life" className="object-contain" fill />
                        </div>
                        <p className="my-4 text-sm text-gray-600">{footerLinks.description}</p>
                        <p className="mb-2 text-sm text-[#5F5F5F]">Follow us on</p>
                        <div className="flex space-x-2 items-center justify-center md:justify-start">
                            {footerLinks.followLinks.map((link, index) => (
                                <Link key={index} href={link.link} className="text-white bg-[#77896F] rounded-full p-1.5 text-sm">
                                    {React.createElement(link.icon)}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mb-8 md:mb-0 md:max-w-[12rem]">
                        <h4 className="md:mb-2 mb-1">Our Services</h4>
                        <ul>
                            {footerLinks.services.map((service, index) => (
                                <li key={index} className="md:mb-2 mb-1">
                                    <Link href={service.link} className="text-gray-600 hover:text-gray-800 text-sm">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 className="md:mb-2 mb-1">Useful Links</h4>
                        <ul>
                            {footerLinks.usefulLinks.map((link, index) => (
                                <li key={index} className="md:mb-2 mb-1">
                                    <Link href={link.link} className="text-gray-600 hover:text-gray-800 text-sm">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h4 className="md:mb-2 mb-1">Our Social Media</h4>
                        <ul>
                            {footerLinks.socialMedia.map((link, index) => (
                                <li key={index} className="md:mb-2 mb-1">
                                    <Link href={link.link} className="text-gray-600 hover:text-gray-800 text-sm">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="md:mt-8 text-center text-gray-600 border-t pt-8 border-black text-sm">
                    @copyright 2024 all rights reserved by titan construction
                </div>
            </div>
        </footer>
    );
};

export default Footer;
