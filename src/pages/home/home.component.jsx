import React from 'react';
import './home.styles.scss';
import logo  from '../../assets/favicon.png';

const HomePage = () => (
    <div className="home">
        <div className="characters">
            <div className="character">
                <img src="https://cdn.glitch.com/6137de19-12c5-43e0-9704-2252d809dcfb%2FRogue.png" alt="xmen"/>
                <div className="info">
                    <img src={logo} alt="xmen symbol" />
                    <h2>ROGUE</h2>
                    <p><b>Name</b></p>
                    <p>Same as alias</p>
                    <p><b>Ability</b></p>
                    <p>Memory Absorption</p>
                </div>
            </div>
            <div className="character">
                <img src="https://cdn.glitch.com/6137de19-12c5-43e0-9704-2252d809dcfb%2FCyclops.png" alt="xmen"/>
                <div className="info">
                <img src={logo} alt="xmen symbol" />
                    <h2>ROGUE</h2>
                    <p><b>Name</b></p>
                    <p>Same as alias</p>
                    <p><b>Ability</b></p>
                    <p>Memory Absorption</p>
                </div>
            </div>
            <div className="character">
                <img src="https://cdn.glitch.com/6137de19-12c5-43e0-9704-2252d809dcfb%2Fwolverine.png" alt="xmen"/>
                <div className="info">
                    <img src={logo} alt="xmen symbol" />
                    <h2>ROGUE</h2>
                    <p><b>Name</b></p>
                    <p>Same as alias</p>
                    <p><b>Ability</b></p>
                    <p>Memory Absorption</p>
                </div>
            </div>
            <div className="character">
                <img src="https://cdn.glitch.com/6137de19-12c5-43e0-9704-2252d809dcfb%2FStorm.png" alt="xmen"/>
                <div className="info">
                    <img src={logo} alt="xmen symbol" />
                    <h2>ROGUE</h2>
                    <p><b>Name</b></p>
                    <p>Same as alias</p>
                    <p><b>Ability</b></p>
                    <p>Memory Absorption</p>
                </div>
            </div>
            <div className="character">
                <img src="https://cdn.glitch.com/6137de19-12c5-43e0-9704-2252d809dcfb%2FRogue.png" alt="xmen"/>
                <div className="info">
                    <img src={logo} alt="xmen symbol" />
                    <h2>ROGUE</h2>
                    <p><b>Name</b></p>
                    <p>Same as alias</p>
                    <p><b>Ability</b></p>
                    <p>Memory Absorption</p>
                </div>
            </div>
        </div>
    </div>
);
export default HomePage;