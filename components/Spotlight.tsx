import Image from 'next/image'

//constants
import { spotlightData } from '@/constants/spotlight'

const Spotlight = () => {
    return (
        <section className='w-full'>
            <h1 className='font-alata text-center lg:text-[125px] text-[32px] leading-[22px] lg:leading-[109px] pt-16 md:pt-32 pb-2'>{spotlightData.title}</h1>
            <p className='text-center text-xs leading-[19px] lg:text-[24px] lg:leading-[35px] lg:mt-8 mt-4 text-[#787878] lg:text-black'>{spotlightData.description}
            </p>

            <div className='grid grid-cols-3 gap-2 mt-16 rounded-[72px] overflow-hidden'>
                {spotlightData.img.map((item, index) => (
                    <div key={index} className={`overflow-hidden relative h-[300px] lg:h-[500px]`} >
                        <Image src={item.src} alt={item.alt} className='overflow-hidden object-cover w-full h-full' layout='fill' />
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Spotlight
