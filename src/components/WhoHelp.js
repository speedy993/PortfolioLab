import React, { Component , useState, useEffect} from "react";
import Circle from "./Circle";
import DomHandler from "domhandler";

const URL = "http://localhost:3005";

const WhoHelp = () =>{

    const [active, setActive] = useState([true, false, false]);
    const [names, setNames] = useState([]);
    const [text, setText] = useState("");
    const [fundaction, setFundaction] = useState([]);
    const [all, setAll] = useState([]);
    const [all2, setAll2] = useState([]);

    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);

    const [ktoreFundacje, setKtoreFundacje] = useState([]);
    const [dane, setDane] = useState("fundaction");
  
    const handleFetchCount = () => {
        fetch(`${URL}/${dane}`)
       
            .then(r => r.json())
            .then(response => {
                
                 setCount(response.length);
                 console.log("leng", response.length)


            })  .catch(err => {      console.log(err)     })

    }

    const handleFetchNames = () => {
        fetch(`${URL}/names`)
       
            .then(r => r.json())
            .then(response => {
                setNames(response);

            })  .catch(err => {      console.log(err)     })

    }

    const handleFetchOrganization = () => {
        fetch(`${URL}/organization`)
       
            .then(r => r.json())
            .then(response => {
                setAll(response);
                console.log("o", response);

        handleFetchLokal();

            })  .catch(err => {      console.log(err)     })

    }

    const handleFetchLokal = () => {
        fetch(`${URL}/lokal`)
       
            .then(r => r.json())
            .then(response => {

                console.log("l", response)
                let temp = all.slice();
                console.log("przed", temp)
                temp.push(response);
                console.log("po", temp)
                setAll(response);

            })  .catch(err => {      console.log(err)     })

    }


    const handleFetchFundaction = () => {
        fetch(`${URL}/${dane}?_page=${ page + 1 }&_limit=3`)
       
            .then(r => r.json())
            .then(response => {
                setFundaction(response);
                console.log("dane", response)

            })  .catch(err => {      console.log(err)     })

    }

    const handlePage = id => () => {
        setPage(id)
    }

    const getPagination = () => {
        if (!count) return;

        const elements = Math.ceil(count/3);
        
        if(elements == 1) return;

        
            return new Array(elements)
            .fill(null)
            .map((_, i) => (
                
                    <Circle key={i} number={i + 1} onCircle={handlePage(i)}></Circle>
               
            ))
     

   

    }

    const handleClick = (e) =>{

        let newState = active.slice();
        newState.fill(false);
        newState[e.currentTarget.id] = true;
        setActive(newState);
        
        setText(names[e.currentTarget.id].name);
        setDane(e.currentTarget.getAttribute("name"));
        console.log(e.currentTarget.getAttribute("name"));
     


    }

    useEffect(() => {

        handleFetchFundaction();
        handleFetchCount();
        setPage(0);
            
    }, [dane])


    useEffect(() => {

        if(names.length != 0){
            setText(names[0].name);
        }
            
    }, [names])

    useEffect(() => {
     
        handleFetchFundaction();
       
        // handleFetchOrganization();
       
    }, [page])

    useEffect(() => {

        handleFetchNames();  
    }, [])


    return (
        <>

        {(fundaction.length == 0 || text.length == 0) ?  <div>{"Błąd pobierania danych"}</div> :
        
        <section id="whoHelp" className="WhoHelp">
         
        <p className="step_main_title">Komu pomagamy?</p>
        <div className="decoration"></div>
        <div className="data">
            <div className="menu">
                <p id="0" name="fundaction" onClick={handleClick} className={`${active[0] ? 'active' : "nonActive"}`}>Fundacjom</p>
                <p id="1" name="organization" onClick={handleClick} className={`${active[1] ? 'active' : "nonActive"}`}>Organizacjom <br></br>pozarządowym</p>
                <p id="2" name="lokal" onClick={handleClick} className={`${active[2] ? 'active' : "nonActive"}`}>Lokalnym zbiórkom</p>
            </div>
        </div>
        <p className="text_help">{text}</p>
        
        <div className='fundacions'>
            <div className='fundacion'>
                <div className="left">
                    <p className="fundacion_name">{fundaction[0].fundaction_name_1}</p>
                    <p className="fundacion_goal">{fundaction[0].fundaction_goal_1}</p>
                </div>
                <div className="right">
                    <p className="fundacion_mini">{fundaction[0].fundaction_mini_1}</p>
                </div>
            </div>
            <div className='fundacion'>
                <div className="left">
                    <p className="fundacion_name">{fundaction[1].fundaction_name_1}</p>
                    <p className="fundacion_goal">{fundaction[1].fundaction_goal_1}</p>
                </div>
                <div className="right">
                    <p className="fundacion_mini">{fundaction[1].fundaction_mini_1}</p>
                </div>
            </div>
            <div className='fundacion'>
                <div className="left">
                    <p className="fundacion_name">{fundaction[2].fundaction_name_1}</p>
                    <p className="fundacion_goal">{fundaction[2].fundaction_goal_1}</p>
                </div>
                <div className="right">
                    <p className="fundacion_mini">{fundaction[2].fundaction_mini_1}</p>
                </div>
            </div>
        </div>

        <div className="circle_contener">
            {getPagination()}
        </div>                 

    </section> 
        
        }

        </>
    );
}

export default WhoHelp;










// const WhoHelp = () =>{

//     const [text, setText] = useState(`W naszej bazie znajdziesz listę
//      zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, 
//      komu pomagają i czego potrzebują.`);

//     const [textPakiet, setTextPakiet] = useState([]);
//     const [active, setActive] = useState([true, false, false]);

//     const [fundaction, setFundaction] = useState("");
//     const [min, setMin] = useState(0);
//     const [max, setMax] = useState(3);
 
//     const handleClick = (e) =>{

//         const ind = e.currentTarget.id;
     
//         let newState = active.slice();
//         newState.fill(false);
//         newState[e.currentTarget.id] = true;
//         setActive(newState);

//         setText(textPakiet[e.currentTarget.id].name);
//         setFundaction(textPakiet[ind].fundaction.slice(min,max));

//     }
//     useEffect(() => {

//         const API = "http://localhost:3005";

//         fetch(`${API}/db`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log("fetch",data.data);
//                 setTextPakiet(data.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });

//       }, []);


//     useEffect(() => {

//         // setFundaction(textPakiet[0].fundaction.slice(min,max));

//       }, [min]);

//       useEffect(() => {

//         if(textPakiet.length != 0){
//             setFundaction(textPakiet[0].fundaction.slice(0,3));

//         }
       
//       }, [textPakiet]);

//     const onCircle = (e) =>{

//         if(e.currentTarget.id == 0){
//             setMin(0);
//             setMax(3);
//         }
//         else{
//             if(max < textPakiet[0].fundaction.length)
//             setMin(prev => prev + 3);
//             setMax(prev => prev + 3);
//         }
     
  


//     }


//     return (
//         <>

//         {fundaction.length == 0 ?  <div>{"/* Treść komponentu */"}</div> :
        
        
        
        
        
//         <section id="whoHelp" className="WhoHelp">
         
//         <p className="step_main_title">Komu pomagamy?</p>
//         <div className="decoration"></div>
//         <div className="data">
//             <div className="menu">
//                 <p id="0" onClick={handleClick} className={`${active[0] ? 'active' : "nonActive"}`}>Fundacjom</p>
//                 <p id="1" onClick={handleClick} className={`${active[1] ? 'active' : "nonActive"}`}>Organizacjom <br></br>pozarządowym</p>
//                 <p id="2" onClick={handleClick} className={`${active[2] ? 'active' : "nonActive"}`}>Lokalnym zbiórkom</p>
//             </div>
//         </div>
//         <p className="text_help">{text}</p>
        
//         <div className='fundacions'>
//             <div className='fundacion'>
//                 <div className="left">
//                     <p className="fundacion_name">{fundaction[0].fundaction_name_1}</p>
//                     <p className="fundacion_goal">{fundaction[0].fundaction_goal_1}</p>
//                 </div>
//                 <div className="right">
//                     <p className="fundacion_mini">{fundaction[0].fundaction_mini_1}</p>
//                 </div>
//             </div>
//             <div className='fundacion'>
//                 <div className="left">
//                     <p className="fundacion_name">{fundaction[1].fundaction_name_2}</p>
//                     <p className="fundacion_goal">{fundaction[1].fundaction_goal_2}</p>
//                 </div>
//                 <div className="right">
//                     <p className="fundacion_mini">{fundaction[1].fundaction_mini_2}</p>
//                 </div>
//             </div>
//             <div className='fundacion'>
//                 <div className="left">
//                     <p className="fundacion_name">{fundaction[2].fundaction_name_3}</p>
//                     <p className="fundacion_goal">{fundaction[2].fundaction_goal_3}</p>
//                 </div>
//                 <div className="right">
//                     <p className="fundacion_mini">{fundaction[2].fundaction_mini_3}</p>
//                 </div>
//             </div>
//         </div>


//         <div className="circle_contener">
//         <Circle id="0" number="1" onCircle={onCircle}></Circle>
//         <Circle id="1" number="2" onCircle={onCircle}></Circle>
//         </div>
      
         

//     </section> 
        
        
        
        
//         }


         
//         </>
//     );
// }

// export default WhoHelp;

