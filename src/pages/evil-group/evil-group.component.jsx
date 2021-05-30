import React from 'react';
import './evil-group.styles.scss';
import ListCharacters from '../../components/list-characters/list-characters.component';

const EvilPage = () => (
    <div className="evil-page">
        <h1 className="title">Evil Group</h1>
        <ListCharacters group={['Acolytes','Team X','X-Force','Friends of Humanity','Brotherhood of Mutants','']}/>
    </div>
);
export default EvilPage;