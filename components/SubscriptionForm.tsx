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
        <section id="join" className='md:my-20 my-16 bg-[#E1DCC3] w-full h-fit rounded-[2rem] py-8 px-4 md:py-24'>
            <div className='md:max-w-2xl flex flex-col items-center mx-auto text-center'>
                <h1 className='font-alata text-center lg:text-[60px] text-xl font-bold lg:leading-[5rem] lg:max-w-5xl md:max-w-xl pb-2'>Our Samatvalife App is Coming Soon!</h1>
                <p className='text-center md:text-base text-sm'>Stay tuned for the updates & join us on our journey. Subscribe to our email list for launch details and exclusive offers</p>

                <form onSubmit={handleSubmit} className="md:flex items-center mt-8 md:relative">
                    <input type='email' placeholder='Enter your email' className='w-full md:w-96 py-2 px-4 placeholder:text-sm placeholder:text-black rounded-[2rem] bg-transparent text-black text-sm border border-black focus:outline-none' value={email} onChange={handleEmailChange} />
                    <button type='submit' className='bg-black text-white py-2.5 md:px-4 px-12 rounded-[2rem] text-sm md:absolute md:right-[-10%] mt-4 md:mt-0'>Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default SubscriptionForm
