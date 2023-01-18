import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import Carroussel from '../components/Carroussel';
import Title from '../components/Title';
import Host from '../components/Host';
import Ratings from '../components/Ratings';
import Tags from '../components/Tags';
import Dropdown from '../components/Dropdown';
import logements from '../assets/json/logements.json';

function Logement() {
    const { id } = useParams()
    const logement = logements.find(logement => logement.id === id);
    const navigate = useNavigate()

    useEffect(() => {
        if (!logement) {
            console.log("la recherche de l'ID n'a pas abouti car logement est = " + logement);
            navigate("/404", { replace: true });
            // composant react-router useNavigate pour renvoyer automatiquement vers la page 404
        }
    })
    return (
        <div>
            <Carroussel pics={logement.pictures} />
            <div className="cntnr-title-location-tags-host-ratings">
                <div className="cntr-title-location-tags">
                    <Title
                        className="title"
                        title={logement.title}
                        location={logement.location}
                    />
                    <div className="cntnr-tags">
                        {logement.tags.map(tag => (
                            <Tags key={tag} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className="cntnr-host-ratings">
                    <Host
                        className="host"
                        host={logement.host}
                    />
                    <Ratings
                        className="ratings"
                        rating={logement.rating}
                    />
                </div>

            </div>
            <div className="container-flex">
                <Dropdown
                    title="Description"
                    titleClass={"logement-title"}
                    contentClass={"logement-content"}
                >
                    {logement.description}
                </Dropdown>
                <Dropdown
                    title="Équipements"
                    titleClass={"logement-title"}
                    contentClass={"logement-content"}
                >
                    {logement.equipments.map(line => {
                        return (
                            <li key={line} className="">{line}</li>
                        )
                    })}
                </Dropdown>
            </div>

        </div>
    );
}

export default Logement;
