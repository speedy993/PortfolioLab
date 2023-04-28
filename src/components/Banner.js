
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Banner = () =>{

    return (
        <>
                <div className="banner">
                    <div className="photo"/>
                    <div className="intro">
                        <p>
                            Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce
                        </p>
                        <div className="decoration"></div>
                        <div className="buttons">
                        <Link style={{ textDecoration: "none" }} to={"/logowanie"}>
                        <button>ODDAJ <br></br>RZECZY</button>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to={"/logowanie"}>
                        <button>ZORGANIZUJ <br></br>ZBIÓRKĘ</button>
                        </Link>
                          
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Banner;

