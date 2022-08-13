import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work'
import Image from 'next/image'

const Works = () => <TileWrapper numOfPages={3}>
    <TileBackground><WorkBackground /></TileBackground>
    <TileContent>
        <Tile page={0} renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>Follow our</div>
                    <div className='text-4xl md:text-5xl font-semibold trancking-tight'>Spotify podcast</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                <Image src="/assets/Spotify.png" layout='responsive' width={840} height={840} alt="spotify logo"/>
            </WorkRight>
            </WorkContainer>
        )} ></Tile>
        <Tile page={1} renderContent={({ progress }) => (
            <WorkContainer>
            <WorkLeft progress={progress}>
                <div>Turn on our</div>
                <div className='text-4xl md:text-5xl font-semibold trancking-tight'>Notifications</div>
            </WorkLeft>
            <WorkRight progress={progress}>
            <Image src="/assets/Instagram.png" layout='responsive' width={840} height={840} alt="instagram logo"/>
            </WorkRight>
            </WorkContainer>
        )} ></Tile>
        <Tile page={2} renderContent={({ progress }) => (
            <WorkContainer>
            <WorkLeft progress={progress}>
                <div>Become a</div>
                <div className='text-4xl md:text-5xl font-semibold trancking-tight'>Connected Creative</div>
            </WorkLeft>
            <WorkRight progress={progress}>
            <Image src="/assets/Discord.svg" layout='responsive' width={840} height={840} alt="discord logo"/>
            </WorkRight>
            </WorkContainer>
        )} ></Tile>
    </TileContent>
</TileWrapper>


export default Works