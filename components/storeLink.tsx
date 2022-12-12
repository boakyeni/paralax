import React, { useRef, useContext, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { ScrollContext } from '../utils/scroll-observer'
import { browserName } from "react-device-detect";
import Link from 'next/link';


const StoreLink: React.FC = () => {


    const [imageLoaded, setImageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0;

    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, [])

    
    return (
            
            <div className={`flex flex-col items-center transition-opacity duration-1000 justify-center top-0 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
                    <Image src='/assets/tpic.png' width={128 / 3} height={114 / 3} alt="logo" onLoad={handleImageLoaded}/>
                    <Link href='/commerce/store'><a target="_blank" rel="noreferrer" className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow relative'>
                    Online Store
                    </a></Link>
            </div>
            
            
    )

}

export default StoreLink