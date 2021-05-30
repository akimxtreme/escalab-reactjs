import React from 'react';
import './not-found.styles.scss';
import logo  from '../../assets/favicon.png';

const NotFoundPage = () => (
    <div className="not-found-page">
        <h1 className="title">Page Not Found</h1>
        <img src={logo} alt="Xmen Symbol" />
    </div>
);
export default NotFoundPage;