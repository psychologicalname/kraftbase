//constants
import { aboutUsData } from '@/constants/aboutUs'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <section id='about' className='w-full flex flex-col items-center'>
            <h1 className='font-alatatext-center lg:text-[125px] text-[32px] leading-[30px] lg:max-w-5xl md:max-w-xl pt-16 md:pt-24 lg:leading-[109px]'>{aboutUsData.title}</h1>
            <p className='lg:text-[24px] text-[12px] leading-[19px] lg:leading-[35px] text-center lg:max-w-[1470px] text-xs text-[#787878] lg:text-black py-4 lg:py-10'>{aboutUsData.description}</p>

            <div className='lg:hidden flex flex-col items-center text-sm gap-4 text-center'>
                {aboutUsData.itemsMobile.map((item, index) => (
                    index < 2 && (
                        <p key={index} className='text-[16px] leading-[25px]'>{item}</p>
                    )

                ))}
                <div className='relative w-[346px] h-[252px]'>
                    <Image src='/assets/aboutus/about_us.png' alt='about' fill className='object-cover' />
                </div>
                {aboutUsData.itemsMobile.map((item, index) => (
                    index >= 2 && (
                        <p key={index} className='text-[16px] leading-[25px]'>{item}</p>
                    )

                ))}
            </div>

            <div className='hidden lg:block mt-16 relative'>
                <div className=''>
                    <div className=''>
                        <div className='absolute left-[-30%] w-[106px] h-[106px]'>
                            <Image src='/assets/aboutus/Group-1.png' alt='Group-1' fill className='object-contain rounded-full' />
                        </div>
                        <p className='absolute left-[-30%] top-[18%] text-[24px] leading-[36px] w-[273px] '>{aboutUsData.itemsDesktop[0].title}</p>
                    </div>
                    <div className=''>
                        <div className='absolute right-[-14%] w-[106px] h-[106px]'>
                            <Image src='/assets/aboutus/Group-2.png' alt='Group-2' fill className='object-contain rounded-full' />
                        </div>
                        <p className='absolute right-[-34%] top-[18%] text-[24px] leading-[36px] w-[273px] '>{aboutUsData.itemsDesktop[1].title}</p>
                    </div>
                </div>

                <div className='w-[847px] h-[617px]'>
                    <Image src='/assets/aboutus/about_us.png' alt='about' fill className='object-cover' />
                </div>

                <div className=''>
                    <div className=''>
                        <div className='absolute bottom-[20%] left-[-30%] w-[106px] h-[106px]'>
                            <Image src='/assets/aboutus/Group-3.png' alt='Group-3' fill className='object-contain rounded-full' />
                        </div>
                        <p className='absolute top-[81%] left-[-30%] text-[24px] leading-[36px] w-[273px] '>{aboutUsData.itemsDesktop[2].title}</p>
                    </div>
                    <div className=''>
                        <div className='absolute bottom-[20%] right-[-14%] w-[106px] h-[106px]'>
                            <Image src='/assets/aboutus/Group-4.png' alt='Group-4' fill className='object-contain rounded-full' />
                        </div>
                        <p className='absolute right-[-34%] top-[81%] text-[24px] leading-[36px] w-[273px] '>{aboutUsData.itemsDesktop[3].title}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
