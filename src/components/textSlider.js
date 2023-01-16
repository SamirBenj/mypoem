import React, { useEffect, useState } from "react";
import '../styles/textslider.css';
import data from '../assets/data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const TextSlider =()=>{
    const [people] = useState (data);
    const [index, setIndex] = useState(0);

        useEffect ( () => {
        const lastIndex = people. length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
            }
        }, [index, people]);

        // useEffect ( () => {
        //     let slider = setInterval(() => {
        //         setIndex(index + 1);
        //     }, 5000);
        //     return () => {
        //         clearInterval (slider);
        //         };
        //     }, [index]);
    return(
        <div>
            <div className="section">
                {/* <div className="title"> 
                    <h2>top leader</h2>
                </div>  */}
                <div className="section-center">
                    {people.map ((item, indexPeople) => {
                        const {id, quote} = item;
                        let position = "nextslide";
                        if(indexPeople === index) {
                            position = "activeslide";
                        }
                        if(indexPeople === index - 1 || (index === 0 && indexPeople === people. length - 1)) {
                            position = "lastslide";
                        }
                        return(
                            <article className={position} key={id}>
                                <p className="text">{quote}</p>
                            </article>
                        )
                    })}
   
                    <AiOutlineArrowLeft className="prev" onClick={()=>setIndex(index - 1)}></AiOutlineArrowLeft>

                    <AiOutlineArrowRight className="next" onClick={()=>setIndex(index + 1)}></AiOutlineArrowRight>
                </div>
            </div>
        </div>
    )
}
export default TextSlider