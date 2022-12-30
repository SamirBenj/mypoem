import React from "react";
import "../styles/about.css"
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import robotHumanImg from "../assets/robothuman.png"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import TextSlider from "../components/textSlider";

const AboutPage = ()=>{
    return(
        <div>
            <NavBar></NavBar>
            <div className="gridAbout">
                <div id="grid1">
                    <p id="aboutTitle">À Propos</p>
                    <img 
                    src={robotHumanImg} 
                    height="200px" 
                    style={{borderRadius:'20px'}}
                    />
                </div>
                <div id="grid2">
                    <p id="para1">
                        L ’ idée est de présenter un poème auquel une personne de type humanoïde exprimant son état de penser, 
                        et son affection qu’aurait tout humain. 
                        Quoi de mieux qu’un poème, une œuvre consacrée plus généralement au thématique de l’amour, 
                        des sentiments, des craintes et de la joie que l’humain éprouve et ressent de manière profonde avec ce support. 
                        L’idée est de présenter un poème auquel une personne de type humanoïde exprimant son état de penser, 
                        et son affection qu’aurait tout humain. 
                        Quoi de mieux qu’un poème, une œuvre consacrée plus généralement au thématique de l’amour, 
                        des sentiments, des craintes et de la joie que l’humain éprouve et ressent de manière profonde avec ce support. "
                        
                    </p>
                </div>
            </div>
            {/* <div className="aboutSlide">
                <AiOutlineArrowLeft size={100}/>
                    <p id="para1">
                        L’idée est de présenter un poème auquel une personne de type humanoïde exprimant son état de penser, 
                        et son affection qu’aurait tout humain. 
                        Quoi de mieux qu’un poème, une œuvre consacrée plus généralement au thématique de l’amour, 
                        des sentiments, des craintes et de la joie que l’humain éprouve et ressent de manière profonde avec ce support. 
                        L’idée est de présenter un poème auquel une personne de type humanoïde exprimant son état de penser, 
                        et son affection qu’aurait tout humain. 
                        Quoi de mieux qu’un poème, une œuvre consacrée plus généralement au thématique de l’amour, 
                        des sentiments, des craintes et de la joie que l’humain éprouve et ressent de manière profonde avec ce support. 
                        
                    </p>
                    <AiOutlineArrowRight size={100} style={{marginRight:'20px'}}/>
                </div> */}

                <TextSlider></TextSlider>
            <Footer></Footer>
        </div>
    )
}

export default AboutPage