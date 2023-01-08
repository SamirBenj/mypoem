import React , { useEffect }from "react";
import "../styles/about.css"
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import robotHumanImg from "../assets/robothuman.png"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import TextSlider from "../components/textSlider";
import 'aos/dist/aos.css';
import Aos from "aos";
import robot_image from '../assets/robot.png';
import new_human_2 from '../assets/new_human_2.jpg';
import robot_upscale from '../assets/robot_upscale.png';
const AboutPage = ()=>{
    useEffect(() => {
        Aos.init({duration:'2000'})
    
    }, [])
    
    return(
        <div>
            <NavBar></NavBar>
            <div className="gridAbout" >
                <div id="grid1" data-aos="fade-up-right" >
                    <p id="aboutTitle">À Propos</p>
                    <img 
                    src={robot_upscale} 
                    height="300px" 
                    style={{borderRadius:'20px'}}
                    />
                </div>
                <div id="grid2" data-aos="fade-up" data-aos-duration="1000">
                    <p id="para1" data-aos="fade-up">
                        L ’ idée est de présenter un poème auquel une personne de type humanoïde exprimant son état de penser, 
                        et son affection qu’aurait tout humain. 
                        Quoi de mieux qu’un poème, une œuvre consacrée plus généralement au thématique de l’amour, 
                        des sentiments, des craintes et de la joie que l’humain éprouve et ressent de manière profonde avec ce support. 
                        <br></br>Ainsi, à travers son écrit, une description de la personnalité du robot est dépeinte afin de donner l’image d’une personne 
                        avec de la sensibilité voire d’une proximité avec nous. 
                        En réalité, le poème va surtout mettre en relief de façon successive le décalage créé entre le robot et le locuteur 
                        au point de créer une chute voire une rupture avec nous et l’auteur."
                        
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
            <div data-aos="fade-up" data-aos-duration="2000">
                <TextSlider ></TextSlider>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutPage