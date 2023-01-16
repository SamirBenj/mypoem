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
                <div>
                <p  style={{
                    textAlign:'justify', 
                    paddingTop:'10px', 
                    color:'white',
                    lineHeight:'1.03cm'
                    }}>
                        Cette illustration met en exergue le contraste qui peut exister entre le robot et la ville. 
                        Cela permet de montrer le décalage dans l'espace qu'occupe l'humanoide qu'est un paysage naturel 
                        par rapport à l'arrière-plan de l'espace urbanisé. C'est une façon de montrer que la machine 
                        s'est mis en retrait pour pouvoir effectuer sa 
                     pause de réflexion sur ces émotions, ses états de pensée, le tout dans son intimité propre et 
                     personnel comme un humain le ferai. c'est pourquoi un déplacement du curseur est 
                     rendu possible pour faire un parallèle et montrer son apparence de nature humaine.                 
                     </p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
export default ArtWorkOnlyPage