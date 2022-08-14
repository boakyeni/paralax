import React, {useRef, useContext} from 'react'
import {SizeContext} from '../utils/size-observer'

interface Props {
    children: React.ReactNode
    initialOffsetX: number
    className: string
    contentWidth: number
}

const SliderContainer: React.FC<Props> = ({children, initialOffsetX, className, contentWidth}) => {
    const { innerWidth } = useContext(SizeContext)
    const refScrollX = useRef<number>(initialOffsetX)
    const refContainer = useRef<HTMLDivElement>(null)
    const refContent = useRef<HTMLDivElement>(null)

    const enabled = innerWidth < contentWidth

    return (
        <div ref={refContainer} className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}>
            <div ref={refContent} className='inline-block'>
                {children}
            </div>
        </div>
    )
}

export default SliderContainer