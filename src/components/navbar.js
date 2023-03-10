import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = ()=> {
    // const [toggleMenu, setToggleMenu] = useState(false);
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
    // const toggleNav = () => {
    //   setToggleMenu(!toggleMenu)
    // }
  
    // useEffect(() => {
    //   const changeWidth = () => {
    //     setScreenWidth(window.innerWidth);
    //   }
    //   window.addEventListener('resize', changeWidth)
    //   return () => {
    //     window.removeEventListener('resize', changeWidth)
    // }
    // }, []);
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
    return(
		<header>
			<p id="navLogo">S.B</p>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/projet">Le Projet</a>
				<a href="/about">À Propos</a>
				<a href="/imageslider">Images</a>
				<a href="">Vidéo</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<AiOutlineMenu />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<AiOutlineMenu />
			</button>
		</header>
    )
}
export default NavBar