import React from "react";
import NavBar from "../components/navbar";
import '../styles/homepage.css';
import robotHumanImg from "../assets/robothuman.png"
import { AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineFastForward } from "react-icons/ai";
import Footer from "../components/footer";
const HomePage =()=>{

    return(
        <div>
            <NavBar></NavBar>
            {/* <h1>HomePage</h1> */}


            <div className="mainCard" style={{height:'auto'}}>
                <img src={robotHumanImg} height="145px"/>

                <div id="names" style={{display:'inline-flex'}}>
                    <p id="secondName">Benjalloul</p> 
                    <p id="firstName">SAMIR</p>

                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                
                  <p id="title" style={{fontSize:"25px"}}>
                    POOR HUMANOÏDE
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
            <div className="mainButton">
                <p style={{
                    textAlign:'end'
                    }}>COMMENCER LE VOYAGE</p>
                    <p>
                        <AiOutlineArrowRight/>
                    </p>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default HomePage