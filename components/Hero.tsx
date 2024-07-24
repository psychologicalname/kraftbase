import Image from 'next/image'

//icons
import { FaWhatsapp } from 'react-icons/fa'

//constants
import { heroData } from '@/constants/hero'

const Hero = () => {
    return (
        <section className='flex flex-col items-center gap-4'>
            <h1 className='font-alata text-center lg:text-[83px] text-[32px] lg:leading-[6rem] lg:max-w-[1005px] md:max-w-xl max-w-[393px]'>{heroData.title}</h1>
            <p className='text-center max-w-[322px] lg:max-w-[1359px] md:max-w-xl md:text-[18px] text-xs text-[#787878] md:text-black leading-[18px] lg:leading-[29px]'>{heroData.description}</p>
            <button type='button' className='bg-black w-[180px] h-[48px] md:w-[240px] md:h-[52px] px-4 text-white rounded-[161px] mt-6 text-[14px] md:text-[20px] flex items-center gap-2'>
                <span>Join our workshop</span>
                <FaWhatsapp />
            </button>

            <div className='lg:hidden block relative w-[327px] h-[263px] mt-6'>
                <Image src='/assets/hero/hero_img.png' alt='hero1' fill className='object-cover rounded-[44px]' />
            </div>

            <div className='lg:flex hidden items-end justify-center gap-4 w-screen p-12'>
                <div className='relative w-[342px] h-[479px]'>
                    <Image src='/assets/hero/Rectangle1.png' alt='hero' fill className='object-cover rounded-[49px]' />
                    <div className='py-6 text-black text-[20px] flex flex-col justify-between'>
                        <p className='px-4 leading-[29px] absolute top-[30px]'>Our logo symbolizes the relation between Yoga and five elements within the body, as per the ancient philosophy. Air, Earth, Water, Fire and Ether</p>
                        <div className='z-10 absolute top-[280px] w-[172px] left-[20px] border-b border-black' />
                        <p className='leading-[27px] px-4 absolute top-[290px]'>Air embodies life force. Pranayama in yoga optimizes breath, focus, and calmness for well-being.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='bg-[#C3DBDD] w-[238px] h-[193px] rounded-[49px] p-8 text-[16px] leading-[25px]'>
                        <p><span className='text-[20px] font-medium'>Water</span>, the body's element, builds & cools, fostering emotional connection</p>
                    </div>
                    <div className='bg-[#D7DBC7] w-[238px] h-[193px] rounded-[49px] p-8 text-[16px] leading-[25px]'>
                        <p><span className='text-[20px] font-medium'>Earth</span>, the core, fosters stability & security through grounding yoga poses</p>
                    </div>
                </div>
                <div className='relative w-[388px] h-[312px]'>
                    <Image src='/assets/hero/hero_img.png' alt='hero1' fill className='object-cover rounded-[44px]' />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='bg-[#F7D2C0] w-[238px] h-[193px] rounded-[49px] p-8 text-[16px] leading-[25px]'>
                        <p><span className='text-[20px] font-medium'>Fire</span> ignites transformation, core strength, and vitality in yoga, fueling focus and personal growth</p>
                    </div>
                    <div className='bg-[#F5E7D1] w-[238px] h-[193px] rounded-[49px] p-8 text-[16px] leading-[25px]'>
                        <p><span className='text-[20px] font-medium'>Ether</span>, space in yoga, fosters peace and self-discovery through mindfulness and meditation</p>
                    </div>
                </div>
                <div className='relative w-[340px] h-[479px]'>
                    <Image src='/assets/hero/Rectangle2.png' alt='hero' fill className='object-cover rounded-[49px]' />
                </div>
            </div>
        </section>
    )
}

export default Hero
