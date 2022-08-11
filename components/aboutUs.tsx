import React from 'react'
import Member from './member'

const AboutUs: React.FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md: text-4xl`}>
            <div className='container mx-auto px-11'>
                <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
                    <strong>We are a collective of creatives looking to maximize our experience on this globe</strong>
                </p> Our group discusses a new book each month on our spotify podcast and google hangouts call
            </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <h2>Our team</h2>
                <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                    <Member id='Shaine' name='Shaine' socialId='@shaine' link="https://github.com"/>
                    <Member id='Kojo' name='Kojo' socialId='@kojo.akuoko' link="kwadwo.vercel.app"/>
                    <div>member</div>
                    <div>member</div>
                    <div>member</div>
                    <div>member</div>
                    
                </div>
            </div>
            </section>
        
    )
}

export default AboutUs