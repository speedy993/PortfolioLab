
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink} from "react-scroll";
import Banner from "./Banner";
import Columns from "./Columns";
import Steps from "./Steps";
import About from "./About";
import WhoHelp from "./WhoHelp";
import Contact from "./Contact";


const Home = () =>{

    return (
      <>
        <div className="container">

          <header>

            <ul className="logGroup">
              <Link style={{ textDecoration: "none" }} to={"/logowanie"}>
                Zaloguj
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/rejestracja"}
              >
                <div className="border">Załóż konto</div>
              </Link>
            </ul>

            <nav>
              <ul className="navigation">
                <li>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/"}
                  >
                    Start
                  </Link>
                </li>
                <li>
                  <ScrollLink style={{cursor: "pointer"}} to={"steps"}>O co chodzi?</ScrollLink>
                </li>
                <li>
                  <ScrollLink style={{cursor: "pointer"}} to={"about"}>O nas</ScrollLink>
                </li>
                <li>
                  <ScrollLink style={{cursor: "pointer"}} to={"whoHelp"}>Fundacja i organizacje</ScrollLink>
                </li>
                <li>
                  <ScrollLink style={{cursor: "pointer"}} to={"contact"}>Kontakt</ScrollLink>
                </li>
              </ul>
            </nav>

          </header>

          <Banner></Banner>
          <Columns></Columns>
          <Steps></Steps>
          <About></About>
          <WhoHelp></WhoHelp>
          <Contact></Contact>

        </div>
      </>
    );
}

export default Home;






            
// <ScrollLink>Start</ScrollLink>
// <ScrollLink>O co chodzi?</ScrollLink>
// <ScrollLink>O nas</ScrollLink>
// <ScrollLink>Fundacja i organizacje</ScrollLink>
// <ScrollLink>Kontakt</ScrollLink>

