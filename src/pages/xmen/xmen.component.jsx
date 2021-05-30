import React from 'react';
import './xmen.styles.scss';
import ListCharacters from '../../components/list-characters/list-characters.component';

const XmenPage = () => (
    <div className="xmen-page">
        <h1 className="title">X-Men</h1>
        <ListCharacters group={['X-Men']}/>
    </div>
);
export default XmenPage;