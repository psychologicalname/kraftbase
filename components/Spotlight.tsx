//constants
import { spotlightData } from '@/constants/spotlight'

const Spotlight = () => {
    return (
        <section className='w-full flex flex-col items-center'>
            <h1 className='font-alata text-center lg:text-[80px] text-[32px] font-bold lg:leading-[6rem] lg:max-w-5xl md:max-w-xl pt-16 md:pt-32 pb-2'>{spotlightData.title}</h1>
            <p className='text-center md:text-base text-xs text-[#787878] lg:text-black'>{spotlightData.description}
            </p>
            <div className='md:mt-16 mt-10 w-full md:grid grid-cols-3 gap-2'>
                <div className='mb-2'>
                    <div className='bg-[#ECD3AB8C] w-full lg:h-72 h-48 md:rounded-tl-[2rem] rounded-t-[2rem] md:rounded-t-[0rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center mb-2'></div>
                    <div className='bg-[#ECD3AB8C] w-full lg:h-72 h-48 md:rounded-bl-[2rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center mb-2'></div>
                </div>
                <div className='mb-2 space-y-2'>
                    <div className='bg-[#ECD3AB8C] w-full lg:h-72 h-48 md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center mb-2'></div>

                    <div className='bg-[#ECD3AB8C] w-full lg:h-72 h-48 md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center mb-2'></div>
                </div>
                <div className='space-y-2'>
                    <div className='bg-[#ECD3AB8C] w-full lg:h-72 h-48 md:rounded-tr-[2rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center mb-2'></div>
                    <div className='bg-[#ECD3AB8C] w-full lg:h-72 h-48 md:rounded-br-[2rem] md:rounded-b-[0rem] rounded-b-[2rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center mb-2'></div>
                </div>
            </div>
        </section>
    )
}

export default Spotlight
