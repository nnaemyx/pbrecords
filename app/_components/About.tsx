import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex justify-between gap-[20px] lg:flex-row flex-col'>
        <div className='font-spaceGrotesk lg:max-w-[622px]'>
            <h2 className="font-spaceGrotesk text-secondary font-medium text-[16px] lg:text-[30px]">About Us</h2>
            <p className='mt-[20px] lg:text-[18px]'>
            <span className='text-primary/60'>PBRECORDS ENTERTAINMENT LIMITED</span> is a revolutionary entertainment platform designed to bridge the gap between artists, event organizers, and music enthusiasts. Our mission is to provide top-notch services, foster meaningful connections, and create unforgettable experiences. We offer comprehensive entertainment solutions. PBRECORDS Ent is a registered company under African jurisdiction Nigeria RC 797510 with registered address 1 ifite road nextlevel junction ifite Awka. We've been in operation since 2009 and grounded our onlin presence in 2023.</p>
        </div>
        <div>
            <Image src="/assets/Untitled (500 x 400 px) (7).svg" alt='about' width={500} height={400}/> 
        </div>
    </div>
  )
}

export default About