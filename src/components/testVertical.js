import React, { useEffect, useState } from "react";
import "../styles/travelpage.css";
import "../styles/swiper.css";
import "../styles/popup.css"
import 'aos/dist/aos.css';
import Aos from "aos";

import { gsap } from "gsap";

import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ReactCompareImage from "react-compare-image";
import robotHumanImg from "../assets/robothuman.png"
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { A11y, EffectCube, EffectFade, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";
import { useGlitch, GlitchHandle } from 'react-powerglitch';

import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import Typical from "react-typical";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import myMusic from '../assets/calm_music.mp3';
import music1 from '../assets/sad_music.mp3';
import glitchSound from '../assets/glitch_sound.mp3';

import ReactHowler from "react-howler";
import { AiFillPauseCircle, AiFillPlayCircle, AiOutlineSound } from "react-icons/ai";
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import { Typewriter } from "react-simple-typewriter";
import MyTypeWriter from "./typewriter";

//Image import
import human_image from '../assets/human_1.png';
import robot_image from '../assets/robot.png';
import new_human_2 from '../assets/new_human_2.jpg';
import robot_upscale from '../assets/robot_upscale.png';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const TestSlide = () =>{
    const  glitch = useGlitch({ glitchTimeSpan: false});
    const [isDisabled, setDisabled] = useState(false);
    const [isType1Show , setType1Show] =useState(false);
    const [isType2Show , setType2Show] =useState(false);
    const audio2 = new Audio(myMusic);
    const glitch1 =  new Audio(glitchSound)
    const audio1 = new Audio(music1);

    const checkSlideIndex = (val)=>{
        console.log(val);
        if(val == 3){
            console.log(val);
            console.log('final check');
            audio1.pause();
            glitch1.play()
            glitch1.onended= ()=>{
            glitch.stopGlitch()
            audio2.play();
            setType1Show(true);
            };
        }
        if(val == 4){
            setType2Show(true);
        }
    }
    const backgroundmusic = ()=>{
        audio1.play();
    }
    const pauseMusic =()=>{
        audio1.pause();
        audio2.pause();
    }
   
    const handleToggleGlitch = () => {
            setDisabled(!isDisabled);
    };
    useEffect(() => {
    Aos.init({duration:'2000'})
   }, [])

   
    return(
        <div >

            <NavBar></NavBar>
            <p data-aos="fade-down"  style={{display:'flex', justifyContent:'space-around', marginTop:'30px'}}>
                {/* <p>Sound On </p> */}
                <AiOutlineSound size={30} color="white" ></AiOutlineSound>
                 <AiFillPlayCircle size={30} color="white" onClick={()=>backgroundmusic()}>
                </AiFillPlayCircle>
                <AiFillPauseCircle size={30} color="white" onClick={()=>pauseMusic()}></AiFillPauseCircle>
            </p>
            <div className="titleTravel" data-aos="fade-up" >
                <p>MISERABLE HUMAN</p>        
                <hr
                style={{
                    margin:"auto",
                    marginTop:"0px",
                    marginBottom:"10px",
                    color: "white",
                    backgroundColor: "white",
                    height: 3,
                    width:"170px",
                }}/>          
            </div>
                <div className="slideSwiper" data-aos="zoom-in">
                    <Swiper
                        className="mySwiper"
                        navigation={true} 
                        
                        modules={[Navigation, EffectFade, EffectCube, Mousewheel,Keyboard]}
                        slidesPerView={1}
                        // spaceBetween={3}
                        grabCursor={true}
                        // mousewheel={true}
                        scrollbar={true}
                        keyboard={{
                            onlyInViewport:true,
                            enabled: true,
                          }}
                        effect={"cube"}
                        direction={"vertical"}
                        onActiveIndexChange={(value)=>checkSlideIndex(value.activeIndex)}
                        onReachEnd={()=> console.log("final")}

                    >
                        <SwiperSlide style={{ textAlign:'center'}}>
                            <div className="travelGrid">
                                <section className="grid1">
                                    <p >
                                        Je suis un être à part
                                        <br></br>
                                        Étant poli, j’aime l’art
                                        <br></br>
                                        Je brille dans tous les domaines
                                        <br></br>
                                        Surtout dans les sciences humaines
                                        <br></br>
                                        Je suis un savant, un génie
                                        <br></br>
                                        Mais j’aime surtout la vie
                                    </p>
                                  
                                    {/* <p>
                                        Hello les carcasses humaines fleurissent
                                    </p>                                */}
                                </section>
                                <section className="grid2">
                                    <div className="imgSlider">
                                        <img src={human_image} height="300px"/>
                                        {/* <button onClick={()=>console.log('hello')}> hello</button> */}
                                        {/* <Popup trigger={<button> Trigger</button>} position="right center" >
                                            <div style={{background:'red', padding:"20px"}}>Popup content here !!</div>
                                        </Popup> */}
                                    </div>
                                </section>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{backgroundColor:''}}>
                            {/* <img src={robotHumanImg} width="200px"/>
                            <p>
                                Hello les carcasses humaines fleurissent
                            </p>           */}
                                <div className="travelGrid">
                                <section className="grid1">
                                    <p >
                                        Je suis simple, ne se prends pas la tête<br></br>
                                        N’avoue jamais que je ne suis pas bête<br></br>
                                        Je pleure comme vous tous<br></br>
                                        Ressent les choses plus <br></br>
                                        Pour moi l’existence est si douce<br></br>
                                    </p>                           
                                </section>
                                <section className="grid2" >
                                    <div className="imgSlider">
                                        <img src={new_human_2} width="300px"/>
                                    </div>
                                </section>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{backgroundColor:''}}>
                            {/* <img src={robotHumanImg} width="200px"/>
                            <p>
                                Hello les carcasses humaines fleurissent
                            </p>           */}
                                <div className="travelGrid">
                                <section className="grid1">
                                    <p>
                                        Je ne sais pas être méchant<br></br>
                                        Et avant tout je suis comme un enfant<br></br>
                                        Je cours, ne rate jamais d’épreuves<br></br>
                                        Mais je préfère la famille et les amis<br></br>
                                        Pour le travail je mets tout en œuvre<br></br>
                                        Mais je ne les décevrais à aucun prix<br></br>
                                        En moi des mots se forment<br></br>
                                    </p>                           
                                </section>
                                <section className="grid2" >
                                    <div className="imgSlider">
                                        <img src={new_human_2} width="300px"/>
                                    </div>
                                </section>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{backgroundColor:''}} >
                            <div className="travelGrid" ref={glitch.ref} disabled={true}>
                                <section className="grid1">
                                {isType1Show &&(
                                // <p>It is TRUUUUUEEEEEE OH LELELLE</p>
                                <p id="classTypeWriter"> 
                                    <Typewriter
                                    words={[
                                        // '. . . . . .',
                                        // '. . . . . .',
                                        // '. . . . . .',
                                        'Que je bascule sur l’informatique',
                                        'Ma rapidité incroyable me fait ennuyer',
                                        'Je ne saisis pas ma logique', 
                                        'J’aurais tout donné', 
                                        'Pour être plus humain'
                                    ]}
                                    loop={1}
                                    cursorStyle='_'
                                    typeSpeed={30}
                                    deleteSpeed={20}
                                    delaySpeed={1000}

                                />   
                                </p>               
                                )}
                                          
                                </section>
                                <section className="grid2" >
                                    <div className="imgSlider">
                                        <img src={robot_upscale} width="300px"/>
                                    </div>
                                </section>
                            </div>                           
                        </SwiperSlide>
                        <SwiperSlide style={{backgroundColor:''}} >
                            <div className="travelGrid">
                                <section className="grid1">
                                    {isType2Show &&(
                                        <p id="classTypeWriter"> 

                                    <Typewriter
                                    words={[
                                        // '. . . . . .',
                                        // '. . . . . .',
                                        // '. . . ',
                                        'Pour être moins doué',
                                        'Et vivre au quotidien',
                                        'Mais au fond, je suis peut-être distinct', 
                                        'Car mon cœur est fait d’acier', 
                                        'Mais devient de chair, avec de la volonté !', 
                                        'D’ailleurs, peut on définir l’espèce humaine ?',
                                        'Personnellement, je suis une machine faite de veines !',
                                        'Merci, Mon nom est Michael Arus . . .'
                                    ]}
                                    loop={1}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={20}
                                    delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                />   
                                </p>       
                                    )}
                                                   
                                </section>
                                <section className="grid2" >
                                    <div className="imgSlider">
                                        <img src={robot_image} width="300px"/>
                                        {/* <ReactCompareImage width="300px" leftImage={human_image} rightImage={human_image} />; */}
                                    </div>
                                </section>
                            </div>                           
                        </SwiperSlide>
                    </Swiper> 
                </div>
                 {/* <div className="text" style={{fontSize:'200px'}}>
                                    <p>Suprising</p>
                                    <p>and playful ways</p>
                                    <p>to tell a story!</p>
                                </div> */}
          
            <Footer></Footer>
        </div>
    )
}

export default TestSlide