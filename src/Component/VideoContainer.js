import React from 'react'
import Card from './Card'

export default function VideoContainer() {
  return (
    <>
        <div className="video-container flex">
          <div className="container parent flex">
            <div className="con-title flex">
              <p>Top Picks For You</p>
            </div>
            <div className="hold-video flex">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
    </>
  )
}