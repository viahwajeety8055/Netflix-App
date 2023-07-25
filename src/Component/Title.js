import React from 'react'
import Image from '../images/nlogo.png';
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'



export default function Title() {
  return (
    <>
      <div className="title flex">
        <div className="container flex parent">
          <div className="first flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="nlogo" />
            <p>SERIES</p>
          </div>
          <div className="heading">
            <h1>STRANGER <span>THINGS</span></h1>
          </div>
          <div className="play flex">
              <div className="play-item flex">
                <BsFillPlayFill size={"20px"}/> <p>Play</p>
              </div>
              <div className="plus-item flex">
                <AiOutlinePlus size={"20px"}/> <p>My List</p>
              </div>
          </div>
          <div className="description">
              <p>When a young boy vanishes, a small town uncovers a mystery involving secret enternaiment terrrifying supermarket bounces and a strange little girl.</p>
          </div>
        </div>
      </div>
    </>
  )
}
