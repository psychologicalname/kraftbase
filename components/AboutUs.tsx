//constants
import { aboutUsData } from '@/constants/aboutUs'

const AboutUs = () => {
    return (
        <section id='about' className='w-full flex flex-col items-center'>
            <h1 className='font-alatatext-center lg:text-[80px] text-[32px] font-bold lg:leading-[6rem] lg:max-w-5xl md:max-w-xl pt-16 md:pt-24 pb-2'>{aboutUsData.title}</h1>
            <p className='text-center lg:max-w-4xl md:text-base text-xs text-[#787878] lg:text-black'>{aboutUsData.description}</p>
            <div className='lg:hidden flex flex-col items-center text-sm gap-4 mt-6 text-center'>
                {aboutUsData.itemsMobile.map((item, index) => (
                    index < 2 && (
                        <p key={index}>{item}</p>
                    )

                ))}
                <div className='bg-orange-200 w-full h-48 rounded-[2rem] mt-4'>
                </div>
                {aboutUsData.itemsMobile.map((item, index) => (
                    index >= 2 && (
                        <p key={index}>{item}</p>
                    )

                ))}
            </div>

            <div className='hidden lg:flex mt-16 relative flex-col items-center'>
                {aboutUsData.itemsDesktop.map((item, index) => (
                    <div key={index} className='flex justify-between'>
                        {index < 2 && (
                            <>
                                <div className={item.style}>
                                    <div className={`rounded-full w-16 h-16 ${item.color}`}></div>
                                    <p className='text-sm'>{item.title}</p>
                                </div>
                                <div className={item.style}>
                                    <div className={`rounded-full w-16 h-16 ${item.color}`}></div>
                                    <p className='text-sm'>{item.title}</p>
                                </div>
                            </>
                        )}

                    </div>
                ))}
                <div className='bg-orange-200 w-[30rem] h-80 rounded-[2rem]'>
                </div>
                {aboutUsData.itemsDesktop.map((item, index) => (
                    <div key={index} className='flex justify-between'>
                        {index >= 2 && (
                            <>
                                <div className={item.style}>
                                    <div className={`rounded-full w-16 h-16 ${item.color}`}></div>
                                    <p className='text-sm'>{item.title}</p>
                                </div>
                                <div className={item.style}>
                                    <div className={`rounded-full w-16 h-16 ${item.color}`}></div>
                                    <p className='text-sm'>{item.title}</p>
                                </div>
                            </>
                        )}

                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutUs
