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
                        <div className="relative w-[173px] lg:w-[173px] h-[50px] mx-auto md:mx-0">
                            <Image src="/assets/logo.png" alt="Samatva Life" className="object-contain" fill />
                        </div>
                        <p className="my-4 text-[16px] leading-[24px] text-[#737373] lg:text-black lg:leading-[22px]">{footerLinks.description}</p>
                        <p className="mb-2 lg:text-[18px] lg:leading-[27px] text-[#5F5F5F]">Follow us on</p>
                        <div className="flex space-x-2 items-center justify-center md:justify-start">
                            {footerLinks.followLinks.map((link, index) => (
                                <Link key={index} href={link.link} className="text-white bg-[#77896F] rounded-full p-1.5 text-sm">
                                    {React.createElement(link.icon)}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mb-8 md:mb-0 max-w-[223px] md:max-w-[12rem]">
                        <h4 className="mb-2 text-[22px] leading-[33px]">Our Services</h4>
                        <ul>
                            {footerLinks.services.map((service, index) => (
                                <li key={index} className="mb-2">
                                    <Link href={service.link} className="text-[16px] leading-[24px] text-[#737373] lg:text-black">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 className="mb-2 text-[22px] leading-[33px]">Useful Links</h4>
                        <ul>
                            {footerLinks.usefulLinks.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <Link href={link.link} className="text-[16px] leading-[24px] text-[#737373] lg:text-black">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h4 className="mb-2 text-[22px] leading-[33px]">Our Social Media</h4>
                        <ul>
                            {footerLinks.socialMedia.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <Link href={link.link} className="text-[16px] leading-[24px] text-[#737373] lg:text-black">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="md:mt-8 text-center text-[16px] leading-[24px] border-t pt-8 border-black lg:text-black text-[#737373] max-w-[334px] md:max-w-full">
                    @copyright 2024 all rights reserved by titan construction
                </div>
            </div>
        </footer>
    );
};

export default Footer;
