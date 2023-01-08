import React, { useEffect } from 'react'
import ReactCompareImage from 'react-compare-image'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import robot_upscale from '../assets/robot_upscale.png';
import human_upscale from '../assets/robot_1_human_upscale.png';
import '../styles/sliderimage.css';
import Aos from "aos";

const ArtWorkOnlyPage = ()=>{
    useEffect(() => {
        Aos.init({duration:'1000'})

    }, [])
    
    return(
        <div>
            <NavBar></NavBar>
            <div className='sliderClass' data-aos="fade-up">
                <div className='grid1'>
                <p data-aos="fade-up"  id="title" style={{fontSize:"25px"}}>
                    MISERABLE HUMAN
                </p>
                <hr
                
                style={{
                    margin:"auto",
                    marginBottom:"20px",
                    marginTop:"7px",
                    color: "white",
                    backgroundColor: "white",
                    height: 1,
                    width:"200px",
                }}/>  
                <div data-aos="fade-up">
                    <ReactCompareImage  leftImage={robot_upscale} rightImage={human_upscale} />
                </div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
export default ArtWorkOnlyPage