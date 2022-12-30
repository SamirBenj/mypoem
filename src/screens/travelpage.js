import React from "react";
import "../styles/travelpage.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ReactCompareImage from "react-compare-image";
import robotHumanImg from "../assets/robothuman.png"


const TravelPage =()=>{
    return(
        <div>
            <NavBar></NavBar>
            <div className="titleTravel">
                <p>POOR HUMANOÏDE</p>
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
            <div className="travelGrid">
                <section className="grid1">
                    <p class="testText">Hello es carcasses humaines fleurissent  </p>
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
            <Footer></Footer>
        </div>
    )
}

export default TravelPage