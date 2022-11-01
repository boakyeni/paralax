import React from 'react'
import Image from 'next/image'
import SliderContainer, { SliderItem } from './slider'

const ClientLogos: React.FC = () => (
    <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
        <Image src='/assets/4agreeimg.jpg' width={150} height={150} alt="We Care" objectFit="contain" />
        </SliderItem>
        <SliderItem width={150}>
        <Image src='/assets/4agreeimg.jpg' width={150} height={150} alt="We Care" objectFit="contain" />
        </SliderItem>
        <SliderItem width={150}>
        <Image src='/assets/4agreeimg.jpg' width={150} height={150} alt="We Care" objectFit="contain" />
        </SliderItem>
        <SliderItem width={150}>
        <Image src='/assets/4agreeimg.jpg' width={150} height={150} alt="We Care" objectFit="contain" />
        </SliderItem>
        <SliderItem width={150}>
        <Image src='/assets/4agreeimg.jpg' width={150} height={150} alt="We Care" objectFit="contain" />
        </SliderItem>
        <SliderItem width={150}>
        <Image src='/assets/4agreeimg.jpg' width={150} height={150} alt="We Care" objectFit="contain" />
        </SliderItem>
        <SliderItem width={150}>
        <Image src='/assets/4agreeimg.jpg' width={150} height={150} alt="We Care" objectFit="contain" />
        </SliderItem>
        <SliderItem width={150}>
        <Image src='/assets/4agreeimg.jpg' width={150} height={150} alt="We Care" objectFit="contain" />
        </SliderItem>
    </SliderContainer>
    </>
)

export default ClientLogos
