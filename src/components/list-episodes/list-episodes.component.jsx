import React, { useEffect, useState } from "react";
import './list-episodes.styles.scss';
import logo  from '../../assets/favicon.png';
import { getEpisodes } from '../../constants/index';

const ListEpisodes = () => {
    useEffect(() => Episodes(), []);
    const [episodes, setEpisodes] = useState([]);
    const Episodes = () => {
        fetch(getEpisodes)
        .then(res => res.json())
        .then(data => {
            //console.log(data.results);
            setEpisodes(data.results);
        })
        .catch(err => console.log(err));
    };



    return (
        <div className="episodes">
        {episodes.map(episode => (
            <div className="episode" key={`episode-${episode.id}`}>
                <div className="info">
                    <div className="season">
                        <img src={logo} alt='Xmen Symbol' />
                        <p>{episode.number}</p>
                    </div>
                    <div className="desc">
                        <h2>{ episode.title }</h2>
                        <p>{ episode.plot }</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
};

export default ListEpisodes;