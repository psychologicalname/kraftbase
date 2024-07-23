//icons
import { MdArrowOutward } from "react-icons/md";

//constants
import { offerData } from "@/constants/offer";

const Offer = () => {
    return (
        <section id="services" className='w-full flex flex-col items-center'>
            <h1 className='font-alata text-center lg:text-[80px] text-[32px] font-bold lg:leading-[6rem] lg:max-w-5xl md:max-w-xl md:pt-20 pt-16 md:pb-12 pb-6'>{offerData.title}</h1>
            <div className='flex md:flex-row flex-col items-center gap-4 w-full'>
                {offerData.items.map((item, index) => (
                    <div key={index} className='bg-[#C7D8B6] w-full md:w-1/2 md:h-96 h-48 rounded-[2rem] md:text-right lg:pb-12 lg:px-16 lg:pt-16 p-4 md:p-8 flex flex-col justify-between lg:items-end text-center items-center'>
                        <div>
                            <h2 className='font-alata md:text-2xl lg:text-4xl font-bold pb-2'>{item.title}</h2>
                            <p className='lg:py-6 lg:text-base text-sm'>{item.description}</p>
                        </div>
                        <button type='button' className='flex items-center gap-2 lg:text-base text-sm'>
                            <span>Contact us for further details</span>
                            <MdArrowOutward />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Offer
