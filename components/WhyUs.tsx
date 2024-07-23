//icons
import { BsArrowUpRightCircleFill } from "react-icons/bs";

//constants
import { whyusdata } from "@/constants/whyus";

const WhyUs = () => {
    return (
        <div id='about' className='w-full flex flex-col items-center'>

            <h1 className='font-alata text-center lg:text-[80px] text-[32px] font-bold lg:leading-[6rem] lg:max-w-5xl md:max-w-xl pt-16 md:pt-32 pb-2'>{whyusdata.title}</h1>
            <p className='text-center md:text-base text-xs text-[#787878] lg:text-black'>{whyusdata.description}</p>

            <div className='md:grid grid-cols-2 md:gap-4 md:mt-16 mt-10'>
                {whyusdata.items.map((item, index) => (
                    <div key={index} className='mb-4 md:mb-0'>
                        <div className={`${item.color} w-full md:h-96 h-48 rounded-[2rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center`}>
                            <h2 className='font-alata md:text-2xl lg:text-4xl font-bold pb-2 max-w-[15rem]'>{item.title}</h2>
                            <p className='lg:py-6 lg:text-base text-xs'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='md:grid grid-cols-2 md:space-x-4 md:space-y-0 space-y-4 md:mt-16 mt-10'>
                <div className='space-y-4'>
                    <div className='bg-[#ECD3AB8C] w-full md:h-96 h-48 rounded-[2rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center'>
                        <h2 className='font-alata md:text-2xl lg:text-4xl font-bold pb-2 max-w-sm'>Diverse Class Offerings</h2>
                        <p className='lg:py-6 lg:text-base text-xs'>Our yoga classes cater to all levels, from beginners to experienced practitioners. We ensure an enriching practice for everyone including elders, new moms, moms to-be etc.'</p>
                    </div>
                    <div className='bg-[#EE916466] w-full md:h-96 h-48 rounded-[2rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center'>
                        <h2 className='font-alata md:text-2xl lg:text-4xl font-bold pb-2 max-w-xs'>Flexible Scheduling</h2>
                        <p className='lg:py-6 lg:text-base text-xs'>Fit yoga seamlessly into your life - choose your time, instructor, and format (at-home or virtual) - all at your fingertips</p>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='bg-[#91BDC28C] w-full md:h-96 h-48 rounded-[2rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center'>
                        <h2 className='font-alata md:text-2xl lg:text-4xl font-bold pb-2 max-w-xs'>Certified  Instructors</h2>
                        <p className='lg:py-6 lg:text-base text-xs'>Well-qualified instructors and therapists providing personalized yoga sessions for your overall well-being, ensuring safety and alignment with your needs</p>
                    </div>
                    <div className='bg-[#B7BE988C] w-full md:h-96 h-48 rounded-[2rem] md:text-right p-4 md:p-8 flex flex-col md:items-end justify-end text-center items-center'>
                        <h2 className='font-alata md:text-2xl lg:text-4xl font-bold pb-2 max-w-[15rem]'>Holistic Benefits</h2>
                        <p className='lg:py-6 lg:text-base text-xs'>Our classes combine asanas, pranayama,  meditation and kriya for holistic well-being, fostering strength, balance and inner peace</p>
                    </div>
                </div>
            </div> */}

            <div className='flex md:flex-row flex-col items-center justify-center md:gap-12 md:mt-24 mt-12 w-full'>
                <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
                    <h2 className='font-alata text-2xl lg:text-4xl font-bold max-w-sm'>{whyusdata.cta.title}</h2>
                    <p className='md:text-base text-xs text-[#787878] lg:text-black md:py-6 py-4 text-center md:text-left'>{whyusdata.cta.description}</p>
                    <button type='button' className='bg-black text-white py-2 px-4 rounded-3xl text-sm flex items-center gap-2'>
                        <span className="text-sm">Get started</span>
                        <BsArrowUpRightCircleFill className='text-lg text-white' />
                    </button>
                    <div className='md:hidden w-full bg-[#C7D8B6] mt-6 h-48 rounded-[2rem]'>
                    </div>
                    <div className="mt-6 md:mt-12 md:hidden lg:flex gap-2 flex flex-wrap justify-center">
                        {whyusdata.cta.items.map((item, index) => (
                            <div key={index} className="max-w-[8rem] flex flex-col items-center lg:items-start">
                                <div className={`w-12 h-12 rounded-xl ${item.color}`}></div>
                                <p className="text-sm py-1 text-center md:text-left">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='hidden md:block w-full md:w-1/2 bg-[#C7D8B6] md:h-96 h-48 rounded-[2rem]'>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
