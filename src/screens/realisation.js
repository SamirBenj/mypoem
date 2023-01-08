import React, { useEffect, useState } from "react";
import back1 from "../assets/back1.png";
import NavBar from "../components/navbar";
import "../styles/realisation.css"

import human_image from '../assets/human_1.png';
import robot_image from '../assets/robot.png';
import new_human_2 from '../assets/new_human_2.jpg';
import robot_upscale from '../assets/robot_upscale.png';
import Footer from "../components/footer";
import 'aos/dist/aos.css';
import Aos from "aos";
import { usePopper } from "react-popper";
const RealisationPage = ()=>{

    const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });
useEffect(() => {
    Aos.init({duration:'1000'})
}, [])


    return(
        
        <div>
            <NavBar></NavBar>

            <div className="mainDiv" >
                <div className="divBack">
                    <img 
                    className="Img"
                    src={back1} 
                />
                </div>
                <div className="cardReal" >
                    <p id="title" data-aos="fade-up">Réalisation</p>
                    <hr style={{
                        width:'90px',
                        marginLeft:'7px',
                        marginBottom:"10px",
                    }}></hr>
                    <p data-aos="fade-up">
                        La réalisation du projet s'est déroulé en plusieurs étapes: premièrement, la recherche d'idée, notamment sur le choix de la thématique
                        d'une uoptie ou d'une dystopie; Ensuite il s'agissait de trouver un parallèle avec des oeuvres existantes, comme cela peu-etre plus pertinent
                       pour permmetre d'appuyer son choix en développant plusieurs idées autour du sujet, que ce soit dans la recherche dans la manière de 
                        présenter son oeuvre avec une tonalité plus originale. C'est ainsi,le cas de sites webs ou autres proposant la recherche d'effets 
                        tels que le son, l'image vu que cela permet d'ajouter plus grande dimension à l'oeuvre en donnant un coté plus dynamisant et fluide dans son utilisation. 
                        Et enfin l'élaboration du site web.
                        
                        C'est donc de cette manière que j'ai procédé à la création de mon oeuvre.
                    </p>
                    <div className="secondImage">
                        <img src={human_image} />
                    </div>
                </div>
            </div>
            <div className="mainDiv2" data-aos="fade-up">
                    <div className="cardRef">
                        <p id="title" data-aos="fade-up">Référence</p>
                        <hr style={{
                        // width:'90px',
                        marginLeft:'7px',
                        marginBottom:"10px",
                    }}></hr>
                    <p data-aos="fade-up">
                        {/* Lorem ipsum dolor sit amet. 
                        Sit iusto nihil ea porro suscipit hic illum veniam sed nobis dolor est 
                        doloribus galisum. 
                        Sit voluptatem repellendus sed quidem illo est quos mollitia id iste amet? Et nostrum nisi et Quis consequatur et quas quas eum ipsam internos. 
                        Aut molestiae dolores quo rerum culpa aut dolorem internos sed consequatur voluptates sed reiciendis vitae et enim animi in vero tempora? */}
                        
                        George Orwell (1903-1950) était un essayiste et journaliste britannique. Son œuvre porte l'empreinte 
                        de ses engagements politiques, eux-mêmes issus en grande partie de l'expérience personnelle de l'auteur : 
                        par exemple, après avoir observé et partagé les conditions de la vie ouvrière à Londres et à Paris, 
                        il s’est ligué contre la justice sociale et le socialisme. Et s'est opposé, au totalitarisme nazi et stalinien 
                        avec une participation à la guerre civile espagnole. 
                        Témoin de son époque, Orwell a été chroniqueur, critique littéraire et romancier dans les années 1930 et 1940. De sa plume, une œuvre de science-fiction 
                        s’en distingue et reçoit des critiques positives avec un prix « prometeus »
                        pour un œuvre de science-fiction et figure parmi les romans les plus incontrounables de 1984, 
                        dans lequel il a inventé le concept de "Big Brother", qui est depuis devenu une expression courante 
                        dans la critique des technologies modernes de surveillance notamment le contrôle des individus.
                        Dans son œuvre, l’auteur dépeint la société qui l’entoure dans une tonalité dystopique : pour n’en citer qu’eux: la délation généralisée, la négation du sexe et de toute sensualité, la police de la pensée et de la langue, et surtout la surveillance de Big Brother, un système de caméra, réduisent l’individu à néant et l’isolent. Tout ce ci amène par conséquent à penser que l’homme devient aliéné à un nouvel ordre mondial auquel la société monopolise de plus en plus les schémas de pensée, vampirise les individus au point qu’un libre arbitre ne soit plus rendu possible. L’inter-états crée ce qu’on appelle don ce « le big brother», un système de technologie avancé basé sur la télésurveillance de masse reposant sur un model politique comparable à une dictature stalinienne ou hitlerienne. L’absence de force vitale, d’esprit critique nous amène donc à pensé que dorénavant l’homme devient automate et réagit plus q’il agit en exécutant des tâches de façons mécanique sans comprendre les nuances psychologiques qui peut exister comme l’empathie. C’est pourquoi, le fait de mettre en avant la personnalité d’un humanoïde à travers le poème est un moyen efficace pour présenter le contraste qui peut exister entre l’univers dystopique et utopique. Entre le genre pathétique et sublime et le genre tragique et lyrique. Comme évoqué dans le roman où les passions d’un humain sont déchirées entre les schémas de pensées universelles et imposé et les passions personnelles.

                    </p>

                    <div className="thirdImage">
                        <img src={robot_image} />
                    </div>
                    </div>
            </div>
            
            <div className="mainDiv3" data-aos="fade-up">
                    <div className="cardWeb">
                        <p id="title" data-aos="fade-up">Création Site Web</p>
                        <hr style={{
                        // width:'90px',
                        marginLeft:'7px',
                        marginBottom:"10px",
                    }}></hr>
                    <p data-aos="fade-up">
                        Concernant la conception du site web, j'ai utilisé le framework React JS, permettant de développer 
                        du html, avec le style css et javascript, un framework, auquel j'ai pu téléchargé des modules qui 
                        m'ont permis de réaliser les animations, de mettre en place des effets tels que la 
                        présentation d'une oeuvre sous forme de cube en 3D lors d'un clique des flèches déroulant le contenu vers le bas.
                        Avant l'utilisation de React JS, j'ai proccédé à la mise en forme d'un prototype avec FIGMA, il 
                        me semblait important d'avoir une idée de l'oeuvre sur le site en apparence tels que 
                        les fonctionnalités possibles, etc. . Ensuite, après la finalisation du site web, j'ai 
                        utilisé Firebase Hosting qui m'a donc permis d'herbéger le site web en ligne.
                    </p>
                    <div className="fourthImage">
                        <img src={robot_upscale} />
                    </div>
                    </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RealisationPage