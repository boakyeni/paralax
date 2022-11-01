import React from 'react'
import Link from 'next/link'
import NextLink from 'next/link'
import { HTMLProps, FC } from 'react';
import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

type ContainerProps = {
    children: React.ReactNode; //👈 children prop typr
  };

export const WorkContainer: React.FC<ContainerProps> = ({children}) => (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>
        {children}
        </div>
)

export const WorkBackground: React.FC = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        <div className="bg-black h-[30vh] lg:h-auto"></div>
        <div className="bg-white h-[70vh] lg:min-h-screen"></div>
    </div>
)

type WorkProps = {
    children: React.ReactNode // children prop typr
    progress: number
  };

export const WorkLeft: React.FC<WorkProps> = ({children, progress}) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if(progress > 0.85) translateY = Math.max(-50, -(progress - 0.85)* 2 * 50)
    return (
        <div className='flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto' style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className='leading-10'>
            {children}
            </div>
            

        </div>
    )
}

export const WorkRight: React.FC<WorkProps> = ({children, progress}) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    return (
        
        <div className='flex flex-1 lg:items-center justify-center h-screen' style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className='w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0'>
                {children}
            </div>
        </div>
        
    )
}
interface LinkProps {
    href: string
    children: React.ReactNode
}
export const WorkLink: React.FC<LinkProps> = ({href, children}) => (
    <Link href={href}><a target="_blank" rel="noreferrer" className="underline underline-offset-8 decoration-1">{children}</a></Link>
)


type WorkGridProps = {
    children: React.ReactNode
    progress: number
    id: string
    title: string
    thumbnail: string
};

export const WorkGridItem: React.FC<WorkGridProps> = ({children, progress, id, title, thumbnail}) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    return (
    <div className='flex flex-1 lg:items-center justify-center h-screen' style={{
            transform: `translateY(${translateY}px)`
    }}>
    <Box w="100%" >
        <NextLink href={`/commerce/${id}`}>
            <LinkBox cursor='pointer'>
                <Image src={thumbnail} alt={title} className='' layout='responsive' width={840} height={840}/>
                <LinkOverlay href={`/commerce/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
    </div>
)

}