// import React, { useEffect, useState } from "react";

// const Poke = () => {
//     const [items, setItems] = useState([]);
//     const [pending, setPending] = useState(false);
//     const [next, setNext] = useState("https://pokeapi.co/api/v2/pokemon");

//     const handleFetch = () => {
//         setPending(true)
//         fetch(next)
//             .then(r => r.json())
//             .then(response => {
//                 setNext(response.next)
//                 setItems(prev => ([
//                     ...prev,
//                     ...response.results
//                 ]))
//                 setPending(false)
//             })
//             .catch(err => {
//                 setPending(false)
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         handleFetch()
//     }, [])

//     return (
//         <>
//             <ul className={"list"}>
//                 {items.map(el => (
//                     <li key={el.url}>{el.name}</li>
//                 ))}
//             </ul>
//             <button onClick={handleFetch} disabled={!items || pending}>
//                 {pending ? "Ładuje dane..." : "NEXT"}
//             </button>
//         </>
//     )
// }

// export default Poke;

// import React, { useEffect, useState } from "react";

// const URL = "https://pokeapi.co/api/v2/pokemon"

//  const Poke = () => {
//     const [items, setItems] = useState([]);
//     const [count, setCount] = useState(null);
//     const [pending, setPending] = useState(false);
//     const [page, setPage] = useState(0)

//     const handleFetch = () => {
//         setPending(true)
//         fetch(`${URL}?offset=${page * 15}&limit=15`)
//             .then(r => r.json())
//             .then(response => {
//                 console.log("xx",response)
//                 setCount(response.count)
//                 setItems(response.results)
//                 setPending(false)
//             })
//             .catch(err => {
//                 setPending(false)
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         handleFetch()
//     }, [page])

//     const handlePage = id => () => {
//         setPage(id)
//     }

//     const getPagination = () => {
//         if (!count) return;

//         const elements = Math.ceil(count/15);

//         return new Array(elements)
//             .fill(null)
//             .map((_, i) => (
//                 <button key={i} onClick={handlePage(i)}>{i + 1}</button>
//             ))

//     }

//     return (
//         <>
//             <ul className={"list"}>
//                 {items.map(el => (
//                     <li key={el.url}>{el.name}</li>
//                 ))}
//             </ul>
//             {getPagination()}
//         </>
//     )
// }

// export default Poke;



// import React, { useEffect, useState } from "react";

// const URL = "http://localhost:3005/data"

// const Poke = () => {
//     const [items, setItems] = useState([]);
//     const [count, setCount] = useState(null);
//     const [page, setPage] = useState(0)

//     const handleFetch = () => {
//         // fetch(`${URL}?offset=${2}&limit=2`)
//         fetch(`${URL}?_page=1&_limit=3`)
       
//             .then(r => r.json())
//             .then(response => {
//                 //  setCount(response.data[0].fundaction.length)
//                 console.log("d", response)
//                 let temp = [];
//                 response[0].fundaction.map(el => temp.push(el.fundaction_name_1));
//                  setItems(temp);
//                  console.log(temp                  );

//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         handleFetch()
//     }, [page])

//     const handlePage = id => () => {
//         setPage(id)
//     }

//     const getPagination = () => {
//         if (!count) return;

//         const elements = Math.ceil(count/3);

//         return new Array(elements)
//             .fill(null)
//             .map((_, i) => (
//                 <button key={i} onClick={handlePage(i)}>{i + 1}</button>
//             ))

//     }

//     return (
//         <>
//             <ul className={"list"}>
//                 {items.map(el => (
//                     <li key={el}>{el}</li>
//                 ))}
//             </ul>
//             {getPagination()}
//         </>
//     )
// }

// export default Poke;




// import React, { useEffect, useState } from "react";

// const URL = "http://localhost:3005/fundaction"

// const Poke = () => {
//     const [items, setItems] = useState([]);
//     const [count, setCount] = useState(null);
//     const [page, setPage] = useState(0)

//     const handleFetch = () => {
//         // fetch(`${URL}?offset=${2}&limit=2`)
//         fetch(`${URL}?_page=2&_limit=3`)
       
//             .then(r => r.json())
//             .then(response => {
//                 //  setCount(response.data[0].fundaction.length)
//                 console.log("d", response)
//                 let temp = [];
//                 response.map(el => temp.push(el.fundaction_name_1));
//                  setItems(temp);
//                  console.log(temp);

//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         handleFetch()
//     }, [page])

//     const handlePage = id => () => {
//         setPage(id)
//     }

//     const getPagination = () => {
//         if (!count) return;

//         const elements = Math.ceil(count/3);

//         return new Array(elements)
//             .fill(null)
//             .map((_, i) => (
//                 <button key={i} onClick={handlePage(i)}>{i + 1}</button>
//             ))

//     }

//     return (
//         <>
//             <ul className={"list"}>
//                 {items.map(el => (
//                     <li key={el}>{el}</li>
//                 ))}
//             </ul>
//             {getPagination()}
//         </>
//     )
// }

// export default Poke;



import React, { useEffect, useState } from "react";

const URL = "http://localhost:3005/fundaction";

// const fetchReq1 = fetch(
//     `https://jsonplaceholder.typicode.com/todos/1`
//   ).then((res) => res.json());
  
//   const fetchReq2 = fetch(
//     `https://jsonplaceholder.typicode.com/todos/2`
//   ).then((res) => res.json());
  

//   const allData = Promise.all([fetchReq1, fetchReq2]);
  
//   allData.then((res) => console.log("allDAta",res));

  

const Poke = () => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(null);
    const [page, setPage] = useState(0);


    

    const handleFetch = () => {
        fetch(`${URL}?_page=${page+1}&_limit=3`)
       
            .then(r => r.json())
            .then(response => {
                //  setCount(response.data[0].fundaction.length);

                setCount(response.length);
                console.log("l", response);
                
                let temp = [];
                response.map(el => temp.push(el.fundaction_name_1));
                setItems(temp);

                 console.log("d", response)
                 console.log("temp", temp);

            })  .catch(err => {      console.log(err)     })


            // Promise.all([
            //     fetch("https://jsonplaceholder.typicode.com/todos/1"),
            //     fetch("https://jsonplaceholder.typicode.com/todos/2")
            // ]).then(([items, contactlist]) => {
            //    console.log("res",items.json(), contactlist);
               
            // }).then(res => {
            //     console.log(res);
            // })
            // .catch((err) => {
            //     console.log(err);
            // });
    }

    useEffect(() => {
        handleFetch()
    }, [page])

    const handlePage = id => () => {
        setPage(id)
    }

    const getPagination = () => {
        if (!count) return;

        const elements = Math.ceil(count/3);

        return new Array(elements)
            .fill(null)
            .map((_, i) => (
                <button key={i} onClick={handlePage(i)}>{i + 1}</button>
            ))

    }

    return (
        <>
            <ul className={"list"}>
                {items.map(el => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
            {getPagination()}
        </>
    )
}

export default Poke;