//constants
import { workshopData } from '@/constants/workshop'
import Image from 'next/image'

const Workshop = () => {
    return (
        <section className='w-full flex flex-col items-center'>
            <h1 className='font-alata text-center text-[32px] leading-[22px] pt-16 pb-2'>{workshopData.title}</h1>
            <p className='text-center text-xs leading-[19px] my-4 text-[#787878]'>{workshopData.description}</p>
            {workshopData.img.map((item, index) => (
                <div key={index} className='relative w-full h-[260px]'>
                    <Image src={item.src} alt={item.alt} className='object-contain' layout='fill' />
                </div>
            ))}
        </section>
    )
}

export default Workshop
