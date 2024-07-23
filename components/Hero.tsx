//icons
import { FaWhatsapp } from 'react-icons/fa'

//constants
import { heroData } from '@/constants/hero'

const Hero = () => {
    return (
        <section className='flex flex-col items-center gap-4'>
            <h1 className='font-alata text-center lg:text-[80px] text-[32px] font-bold lg:leading-[6rem] lg:max-w-5xl md:max-w-xl'>{heroData.title}</h1>
            <p className='text-center lg:max-w-5xl md:max-w-xl md:text-base text-sm'>{heroData.description}</p>
            <button type='button' className='bg-black text-white py-2 px-4 rounded-3xl mt-4 text-sm flex items-center gap-2'>
                <span>Join our workshop</span>
                <FaWhatsapp className='text-lg' />
            </button>

            <div className='md:hidden block bg-orange-200 w-full h-48 rounded-[2rem] mt-4'>
            </div>

            <div className='lg:hidden hidden md:flex items-end justify-center gap-4 w-screen p-12'>
                <div className='bg-cyan-200 w-72 h-80 rounded-[2rem]'>
                </div>
                <div className='bg-orange-200 w-72 h-48 rounded-[2rem]'>
                </div>
                <div className='bg-pink-200 w-72 h-80 rounded-[2rem]'>
                </div>
            </div>

            <div className='lg:flex hidden items-end justify-center gap-4 w-screen p-12'>
                <div className='bg-[#C7D8B6] w-72 h-96 rounded-[2rem] flex flex-col justify-between px-4 py-6 text-black'>
                    <p>Our logo symbolizes the relation between Yoga and five elements within the body, as per the ancient philosophy. Air, Earth, Water, Fire and Ether</p>
                    <div className='border-b border-black' />
                    <p>Air embodies life force. Pranayama in yoga optimizes breath, focus, and calmness for well-being.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='bg-[#C3DBDD] w-72 h-44 rounded-[2rem] p-8'>
                        <p><span className='font-semibold'>Water</span>, the body's element, builds & cools, fostering emotional connection</p>
                    </div>
                    <div className='bg-[#D7DBC7] w-72 h-44 rounded-[2rem] p-8'>
                        <p><span className='font-semibold'>Earth</span>, the core, fosters stability & security through grounding yoga poses</p>
                    </div>
                </div>
                <div className='bg-orange-200 w-72 h-64 rounded-[2rem]'>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='bg-[#F7D2C0] w-72 h-44 rounded-[2rem] p-8'>
                        <p><span className='font-semibold'>Fire</span> ignites transformation, core strength, and vitality in yoga, fueling focus and personal growth</p>
                    </div>
                    <div className='bg-[#F5E7D1] w-72 h-44 rounded-[2rem] p-8'>
                        <p><span className='font-semibold'>Ether</span>, space in yoga, fosters peace and self-discovery through mindfulness and meditation</p>
                    </div>
                </div>
                <div className='bg-[#C7D8B6] w-72 h-96 rounded-[2rem]'>
                </div>
            </div>
        </section>
    )
}

export default Hero
