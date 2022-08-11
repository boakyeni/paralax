import React from 'react'
import Image from 'next/image'

const Masthead: React.FC = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            {/* Video background incase a replacement is found for vanta.js
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src="" type ="video/mp4; codecs=hvc1" title="video background"/>
                <source src="" type ="video/web; codecs=vp9" title="video background"/>
            </video>
            */}
            <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
                <Image src='' width={128/3} height={114/3} alt="logo" />
            </div>
            <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>The Downtown Los Angeles BookClub</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>Creatives,</span> <span>sharpening the mind</span>
                </h2>
            </div>
            <div className='flex-grow-0 pb-20 md:pb-10 transition-all duration-1000'>
                <Image src='' width={188/3} height={105/3} alt='scroll down'></Image>
            </div>
        </div>
    )

}

export default Masthead