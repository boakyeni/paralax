import React from 'react'
import ClientLogos from './client-logos'
import Testimonials from './testimonials'
import s from '../styles/trustedby.module.css'

const TrustedBy: React.FC = () => (
    <section className= {` bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}>
        <div className="flex-1"></div>
    <div className="flex flex-col justify-center items-center">
        <h3 className='text-xl mb-10 font-bold text-center'>
            <span className="whitespace-nowrap">Become a supporter</span>{' '}
            <span className="whitespace-nowrap">on Patreon</span>
        </h3>
        <ClientLogos />
    </div>
    <div className="flex flex-col justify-center items-center">
    <div className="container mx-auto lg:max-w-[70%] lg:px-10">
        <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5em] font-bold">Sharpen the mind and capture your entire experience</h3>
    </div>
    </div>
    <Testimonials />
    <div className="flex-1 bg-black"></div>
    </section>
)

export default TrustedBy