import React from 'react'
import { useLocation } from 'react-router';

export default function CardBackDoc() {

    const location = useLocation();
    const { companyName, cardBack, cardBackLogo } = location.state || {};

    return (
        <div className="template-background back" style={{ backgroundImage: `url(${cardBack})` }}>
            <img src={cardBackLogo} alt="" className="back-logo" />
            <p className="company-name">{companyName}</p>
        </div>
    )
}

