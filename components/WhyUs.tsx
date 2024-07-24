//icons
import { BsArrowUpRightCircleFill } from "react-icons/bs";

//constants
import { whyusdata } from "@/constants/whyus";
import Image from "next/image";

const WhyUs = () => {
    return (
        <div id='about' className='w-full flex flex-col items-center'>

            <h1 className='font-alata text-center lg:text-[125px] text-[32px] leading-[30px] lg:leading-[109px] lg:max-w-5xl md:max-w-xl pt-16 md:pt-32 pb-4 lg:pb-10'>{whyusdata.title}</h1>
            <p className='text-center lg:text-[24px] lg:leading-[35px] text-xs leading-[19px] text-[#787878] lg:text-black'>{whyusdata.description}</p>

            <div className='md:grid grid-cols-2 md:gap-4 md:mt-16 mt-10'>
                {whyusdata.items.map((item, index) => (
                    <div key={index} className='mb-4 md:mb-0'>
                        <div className={`${item.color} h-[260px] lg:h-[524.32px] rounded-[41px] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center relative`}>
                            <Image src={item.img} alt='yoga' width={280} height={250} className="hidden lg:block absolute top-20 left-4" />
                            <Image src={item.img} alt='yoga' width={99.79} height={94.69} className="block lg:hidden absolute top-4 left-[35%]" />
                            <h2 className={`font-alata text-[24px] leading-[25.2px] lg:text-[64px] lg:leading-[67.2px] pb-2 ${item.title === 'Holistic Benefits' ? 'max-w-[434.7px]' : 'max-w-[513px]'} lg:absolute lg:bottom-[200px]`}>{item.title}</h2>
                            <p className='lg:py-6 lg:text-[20px] lg:leading-[32.2px] lg:max-w-[509px] lg:text-[#343434] text-[#383838] text-xs leading-[19px]'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex md:flex-row flex-col items-center justify-center md:gap-12 md:mt-24 mt-12 w-full'>
                <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
                    <h2 className='font-alata text-2xl lg:text-[77px] lg:leading-[80.85px] lg:max-w-[546px]'>{whyusdata.cta.title}</h2>
                    <p className='md:text-[24px] md:leading-[35px] text-xs text-[#787878] lg:text-black md:py-8 py-4 text-center md:text-left'>{whyusdata.cta.description}</p>
                    <button type='button' className='bg-black text-white py-2 md:py-3 px-6 rounded-[161px] md:text-[20px] md:leading-[23px] text-[16px] leading-[23px] flex items-center gap-2'>
                        <span className="">Get started</span>
                        <BsArrowUpRightCircleFill className=' text-white' />
                    </button>
                    <div className='md:hidden mt-6'>
                        <Image src='/assets/whyus/Group9.png' alt="" width={363} height={260} className="rounded-[41px]" />
                    </div>
                    <div className="mt-8 md:mt-16 md:hidden lg:flex gap-8 flex flex-wrap  justify-between">
                        {whyusdata.cta.items.map((item, index) => (
                            <div key={index} className="max-w-[8rem] flex flex-col items-center lg:items-start">
                                <Image src={item.img} alt="" width={83.63} height={83.63} className="md:hidden block" />
                                <Image src={item.img} alt="" width={88} height={88} className="md:block hidden" />
                                <p className="text-xs leading-[15.96px] md:text-[20px] md:leading-[26.6px] md:w-[166px] py-1 text-center md:text-left md:max-w-[9.5rem]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='hidden md:block md:w-1/2'>
                    <Image src='/assets/whyus/Group9.png' alt="" width={730} height={653} className="rounded-[41px]" />
                </div>
            </div>
        </div>
    )
}

export default WhyUs
