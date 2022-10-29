import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => (
    <Carousel className='bg-black text-white py-10 lg:py-20'>
        <CarouselItem index={0}>
            <Review by="my mans">
                Such a good book club
            </Review>
        </CarouselItem>
        <CarouselItem index={1}>
            <Review by="other dude">
                Really so good
            </Review>
        </CarouselItem>
        <CarouselItem index={2}>
            <Review by="this guy">
                Join this bookclub
            </Review>
        </CarouselItem>
        <CarouselItem index={3}>
            <Review by="test">
                it&apos;s a good bookclub
            </Review>
        </CarouselItem>
    </Carousel>
)

export default Testimonials