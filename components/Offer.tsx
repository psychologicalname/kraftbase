import Image from "next/image";

//icons
import { MdArrowOutward } from "react-icons/md";

//constants
import { offerData } from "@/constants/offer";

const Offer = () => {
    return (
        <section id="services" className=''>
            <h1 className='font-alata text-center lg:text-[122.47px] text-[32px] lg:leading-[112.68px] py-10 lg:py-16'>{offerData.title}</h1>
            <div className='md:grid grid-cols-2 gap-4'>
                {offerData.items.map((item, index) => (
                    <div key={index} className='relative md:mb-0 mb-4'>
                        <div className="relative z-10 flex flex-col justify-between pb-6 lg:py-8 h-full">
                            <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} lg:pb-12 lg:px-20 p-4 md:p-8 text-center`}>
                                <h2 className='font-alata lg:text-[62.71px] text-[25px] leading-[70px] pb-2'>{item.title}</h2>
                                <p className={`lg:py-6 text-xs lg:text-[23px] text-[#383838] lg:leading-[33.31px] max-w-[250px] lg:max-w-full ${index % 2 === 0 ? 'md:float-right mx-auto md:mx-0 md:pl-6' : 'mx-auto md:mx-0 md:pr-6'}`}>{item.description}</p>
                            </div>
                            <button type='button' className={`${index % 2 === 0 ? 'md:self-end md:right-8 lg:right-16 mx-auto md:mr-6 lg:mr-20' : 'md:float-left lg:left-16 md:left-8 mx-auto md:ml-6 lg:ml-20'} flex-wrap flex items-center gap-2 lg:text-[23.52px] font-medium leading-[32.33px] text-sm`}>
                                <span>Contact us for further details</span>
                                <MdArrowOutward />
                            </button>
                        </div>
                        <div className="md:block hidden absolute w-full h-full top-0 left-0">
                            <Image src={item.bgImg} alt={item.title} className='' fill />
                        </div>
                        <div className="md:hidden block absolute w-full h-full top-0 left-0 bg-[#C7D8B6] rounded-[44px]" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Offer
