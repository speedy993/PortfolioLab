
import React, { Component } from "react";
import icon1 from "./../assets/Icon-1.svg"; 
import icon2 from "./../assets/Icon-2.svg"; 
import icon3 from "./../assets/Icon-3.svg"; 
import icon4 from "./../assets/Icon-4.svg"; 
import { Link } from "react-router-dom";

const Steps = () =>{

    return (
        <>
        <section id="steps" className="simpleSteps">
                <p className="step_main_title">Wystarczą 4 proste kroki</p>
                <div className="decoration"></div>
                <div className="icons_section">
                    <div className="step">
                        {/* <img src={"./../assets/Icon-1.svg"} /> */}
                        <img src={icon1} />
                        {/* <img src={require('./../assets/Decoration.svg')} /> */}
                        <p className="step_title">Wybierz rzeczy</p>
                        <div className="line"></div>
                        <p>ubrania, zabawki,<br></br>sprzęt i inne</p>
                    </div>
                    <div className="step">
                        <img src={icon2} />
                        <p className="step_title">Spakuj je</p>
                        <div className="line"></div>
                        <p>skorzystaj z<br></br>worków na śmieci</p>
                    </div>
                    <div className="step">
                        <img src={icon3} />
                        <p className="step_title">Zdecyduj komu<br/>chcesz pomóc</p>
                        <div className="line"></div>
                        <p>wybierz zaufane<br></br>miejsce</p>
                    </div>
                    <div className="step">
                        <img src={icon4} />
                        <p className="step_title">Zamów kuriera</p>
                        <div className="line"></div>
                        <p>kurier przyjedzie<br/> w dogodnym terminie</p>
                    </div>
                </div>
                <Link style={{ textDecoration: "none" }} to={"/logowanie"}>
                        <button>ODDAJ <br></br>RZECZY</button>
                </Link>
          </section>
        </>
    );
}

export default Steps;


