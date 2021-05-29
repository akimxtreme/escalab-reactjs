import React from 'react';
import './home.styles.scss';
import ListCharacters from '../../components/list-characters/list-characters.component';

const HomePage = () => (
    <div className="home">
        <ListCharacters/>
    </div>
);
export default HomePage;