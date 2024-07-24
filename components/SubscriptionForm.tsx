'use client'

import { useState } from "react"

const SubscriptionForm = () => {
    const [email, setEmail] = useState<string>('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <section id="join" className='w-full md:my-20 my-16 bg-[#E1DCC3] rounded-[41px] lg:rounded-[111.88px] py-12 px-4 md:py-24'>
            <div className='lg:px-24 flex flex-col items-center mx-auto text-center'>
                <h1 className='font-alata text-center lg:text-[95.05px] lg:leading-[103.96px] text-[32px] leading-[37px]'>Our Samatvalife App is Coming Soon!</h1>
                <p className='py-8 text-center lg:text-[23.76px] lg:leading-[34.65px] text-xs leading-[19px]'>Stay tuned for the updates & join us on our journey. Subscribe to our email list for launch details and exclusive offers</p>

                <form onSubmit={handleSubmit} className="md:flex items-center lg:mt-8 md:relative">
                    <input type='email' placeholder='Enter your email' className='w-full lg:w-[779.21px] lg:h-[62.38px] md:w-96 py-2 px-4 lg:px-12 lg:text-[19.8px] lg:leading-[16.63px] lg:placeholder:text-[19.8px] placeholder:text-black rounded-[2rem] bg-transparent text-black text-[15px] leading-[16.8px] placeholder:text-[15px] border border-black focus:outline-none' value={email} onChange={handleEmailChange} />
                    <button type='submit' className='w-[170px] text-[15px] leading-[16.8px] lg:w-[154px] lg:h-[63px] bg-black text-white py-2.5 rounded-[2rem] lg:text-[20px] lg:leading-[16.8px] md:absolute md:right-[-10%] mt-4 md:mt-0'>Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default SubscriptionForm
