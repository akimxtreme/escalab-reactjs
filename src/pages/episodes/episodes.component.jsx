import React from 'react';
import './episodes.styles.scss';
import ListEpisodes from '../../components/list-episodes/list-episodes.component';

const EpisodesPage = () => (
    <div className="episodes-page">
        <h1 className="title">Episodes</h1>
        <ListEpisodes/>
    </div>
);
export default EpisodesPage;