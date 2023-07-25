import React from 'react'
import Card from './Component/Card'
import Navbar from './Component/Navbar'
import Title from './Component/Title'
import VideoContainer from './Component/VideoContainer'

export default function () {
    return (
        <>
            <div className='main'>
                <Navbar />
                <Title />
                <VideoContainer />
            </div>
        </>
    )
}
