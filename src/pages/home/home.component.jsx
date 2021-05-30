import React from 'react';
import './home.styles.scss';
import ListCharacters from '../../components/list-characters/list-characters.component';

const HomePage = () => (
    <div className="home">
        <h1 className="title">Characters</h1>
        <ListCharacters/>
    </div>
);
export default HomePage;