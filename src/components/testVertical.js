import React from "react";
import "../styles/travelpage.css";
import "../styles/swiper.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ReactCompareImage from "react-compare-image";
import robotHumanImg from "../assets/robothuman.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCube, EffectFade, Navigation, Pagination, Scrollbar } from "swiper";

import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';

// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module

const TestSlide = () =>{
    return(
        <div>
            <NavBar></NavBar>
                <div className="slideSwiper">
                    <Swiper
                        className="mySwiper"
                        navigation={true} 
                        modules={[Navigation, EffectFade, EffectCube]}
                        slidesPerView={1}
                        spaceBetween={3}
                        grabCursor={true}
                        scrollbar={true}
                        effect={"cube"}
                        direction={"vertical"}
                        onSwiper={()=>console.log(1)}
                    //  loop={true}
                    >
                        <SwiperSlide style={{backgroundColor:'', textAlign:'center'}}>
                            {/* <img src={robotHumanImg} width="200px"/> */}
                            <div className="travelGrid">
                <section className="grid1">
                    <p class="testText">Hello es carcasses humaines fleurissent  </p>
                    <Typic
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
                    {/* <p>
                    Des carcasses humaines fleurissent le bord de la route.
                    <br></br>Enfin, ce qu’il en reste…
                    <br></br>Le ciel n’existe plus, seul le soleil est maître de l’univers.
                    </p> */}
                </section>
                <section className="grid2">
                    <div className="imgSlider">
                         <ReactCompareImage
                    leftImage={robotHumanImg}
                    rightImage={robotHumanImg}
                    />
                    </div>
               
                    
                </section>
            </div>
                        </SwiperSlide >
                        <SwiperSlide style={{backgroundColor:'red'}}>
                        <img src={robotHumanImg} width="200px"/>

                        </SwiperSlide>
                        <SwiperSlide style={{backgroundColor:'red'}}>
                        <img src={robotHumanImg} width="200px"/>

                        </SwiperSlide>
                    </Swiper> 
                </div>
            <Footer></Footer>
        </div>
    )
}

export default TestSlide