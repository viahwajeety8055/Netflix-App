import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsBell } from 'react-icons/bs'


export default function Navbar() {
    return (
        <>
            <div className="navbar flex">
                <div className="container flex parent">
                    <div className="img-logo">
                        <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo"
                            width={"200px"}
                        />
                    </div>
                    <div className="right-side flex">
                        <div className="menu flex">
                            <ul className="menu-items flex">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Tv Shows</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">Recently Added</a></li>
                                <li><a href="#">My List</a></li>
                            </ul>
                        </div>
                        <div className="side-logos flex">
                            <ul className="right-items flex">
                                <li><a href="#"><FiSearch size={"25px"}/></a></li>
                                <li><a href="#">KIDS</a></li>
                                <li><a href="#">DVD</a></li>
                                <li><a href="#"><BsBell size={"25px"}/></a></li>
                                <li><a href="#">Menu</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}