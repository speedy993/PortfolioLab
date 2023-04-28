
import React, { Component } from "react";
import icon1 from "./../assets/Icon-1.svg"; 
import icon2 from "./../assets/Icon-2.svg"; 
import icon3 from "./../assets/Icon-3.svg"; 
import icon4 from "./../assets/Icon-4.svg"; 
import people from "./../assets/People.jpg";
import { Link } from "react-router-dom";

const About = () =>{

    return (
        <>
        <section id="about" className="about">
            <div className="text">
                <p className="title_about">O nas</p>
                <div className='decoration'></div>
                <p>
                    Nori grape silver beet broccoli kombu beet <br></br>greens fava bean potato quandong celery. 
                    <br></br>Bunya nuts black-eyed pea prairie turnip leek<br></br>lentil turnip greens parsnip.
                </p>
            </div>
            <img src={people}></img>
        </section>
        </>
    );
}

export default About;


