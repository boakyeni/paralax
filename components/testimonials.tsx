import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'

const Testimonials: React.FC = () => (
    <Carousel className='bg-black text-white py-10 lg:py-20'>
        <CarouselItem index={0}>
            <div>Such a good book club</div>
        </CarouselItem>
    </Carousel>
)

export default Testimonials