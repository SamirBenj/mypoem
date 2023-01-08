import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import '../styles/homepage.css';
import robotHumanImg from "../assets/robothuman.png"
import { AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineFastForward } from "react-icons/ai";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from "aos";
const HomePage =()=>{
useEffect(() => {
    Aos.init({duration:'2000'})
}, [])

    return(
        <div>
            <NavBar ></NavBar>
            {/* <h1>HomePage</h1> */}

        <div data-aos="fade-up" >
            <div 
            className="mainCard" 
            // data-aos="fade-up" 
            style={{height:'auto'}}
            >
                <img data-aos="fade-up"  src={robotHumanImg} height="150px"/>

                <div id="names" style={{display:'inline-flex'}}>
                    <p id="secondName" data-aos="fade-up">BENJALLOUL</p> 
                    <p id="firstName" data-aos="fade-up" >Samir</p>

                </div>
                <p data-aos="fade-up" style={{lineHeight:'1.02cm', marginBottom:'10px'}} >
                À travers l'oeuvre, vous allez découvrir une personne humaine, 
                cependant la réalité des choses va prendre le dessus... 
                À cet effet, la personnalité de la personne sera dépeint de fil en aiguille pour en voir sa vrai facette.
                
                <br></br>
                {/* <br></br>
                <br></br> */}
                </p>

                
                  <p data-aos="fade-up"  id="title" style={{fontSize:"25px"}}>
                    MISERABLE HUMAN
                </p>
                <hr
                style={{
                    margin:"auto",
                    marginTop:"7px",
                    color: "white",
                    backgroundColor: "white",
                    height: 1,
                    width:"200px",
                }}/>  
                
            </div>
        </div>
            
            <Link to={'/travel'}>

                <div className="mainButton" >
                        {/* <p>eheh</p> */}
                        <p style={{
                        textAlign:'end'
                        }}>COMMENCER LE VOYAGE</p>
                        <p>
                            <AiOutlineArrowRight/>
                        </p>
                
                </div>
            </Link>

            <Footer></Footer>
        </div>
    )
}
export default HomePage