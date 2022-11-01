import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import Link from 'next/link'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work'
import Image from 'next/image'
import Member from './member'


const Works = () => <TileWrapper numOfPages={4}>
    <TileBackground><WorkBackground /></TileBackground>
    <TileContent>
    <Tile page={0} renderContent={({ progress }) => (
            <WorkContainer>
            <WorkLeft progress={progress}>
                <div>Follow our</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Spotify podcast</div>
            </WorkLeft>
            <WorkRight progress={progress}>
                <Image src="/assets/Spotify.png" layout='responsive' width={840} height={840} alt="spotify logo" />
            </WorkRight>
        </WorkContainer>
        )} ></Tile>
        <Tile page={1} renderContent={({ progress }) => (
            <WorkContainer>
            <WorkLeft progress={progress}>
                <div>Read this month's</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Book of Choice</div>
            </WorkLeft>
            <WorkRight progress={progress}>
                <Image src="/assets/openbook.svg" layout='responsive' width={840} height={840} alt="open book svg" />
            </WorkRight>
        </WorkContainer>
        )} ></Tile>
        <Tile page={2} renderContent={({ progress }) => (
            <WorkContainer>
            <WorkLeft progress={progress}>
                <div>Visit our</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'><WorkLink href="/commerce/store" >Online Store</WorkLink></div>
            </WorkLeft>
            <WorkRight progress={progress}>
            <WorkLink href="/commerce/store" ><Image src="/assets/hoodie.png" layout='responsive' width={840} height={840} alt="merch logo" /></WorkLink>
            </WorkRight>
        </WorkContainer>
        )} ></Tile>
        <Tile page={3} renderContent={({ progress }) => (
            <WorkContainer>
            <WorkLeft progress={progress}>
                <div>Become a</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Connected Creative</div>
            </WorkLeft>
            <WorkRight progress={progress}>
                <WorkLink href="https://www.instagram.com/thedtlabookclub/"><Image src="/assets/Instagram.png" layout='responsive' width={840} height={840} alt="instagram logo" /></WorkLink>
            </WorkRight>
        </WorkContainer>
        )} ></Tile>
    </TileContent>
</TileWrapper>
export default Works