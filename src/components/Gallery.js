import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Thumb from "./Thumb"
//import logements from "../assets/json/logements.json"
//NE MARCHE PAS 
//import axios from "axios" 
//N'ARRIVE PAS TROUVER LE FICHIER JSON????

function Gallery() {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        //     async function fetchData() {
        //         const res = await fetch('path/to/data.json');
        //         const data = await res.json();
        //         setLogements(data);
        //     }
        //     fetchData();
        // }, []);

        fetch('/json/logements.json')
            .then(res => res.json())
            .then(logements => setLogements(logements))
            .catch(error => console.log(error))
    })

    return (
        <section>
            <div className="gallery-cntnr">
                {logements.map(loc => (
                    <div className="thumb" key={loc.id} >
                        <Link to={`../../logements/${loc.id}`}>
                            <Thumb
                                cover={loc.cover}
                                title={loc.title}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery;