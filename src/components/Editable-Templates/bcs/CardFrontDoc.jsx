import React from 'react'
import { useLocation } from 'react-router';
//icons
import { ImMobile } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'

export function CardFrontDoc() {
    const location = useLocation();
    const { firstName, middleName, lastName, jobTitle, companyName, email, number, companyLogo, cardBackground } = location.state || {};

    return (
        <div className="template-background front" style={{ backgroundImage: `url(${cardBackground})` }}>
            <div className="name-title-div">
                <p className='name'>{firstName} {middleName} {lastName}</p>
                <hr className='line' />
                <p className="title">{jobTitle}</p>
                <hr className='line second' />
            </div>

            <div className="info-div">
                <div className="contact-div">
                    <p className="number"><ImMobile className='icon' />{number}</p>
                    <p className="email"><AiOutlineMail className='icon' /> {email}</p>
                    <p className="website"><TbWorld className='icon' /> {companyName}</p>
                    <div className="company">
                        <img src={companyLogo} alt="Company Logo" />
                    </div>
                </div>

                <div className="address-div">
                    <p className='address'>6th Floor, M. Stella, Feerozu Magu, 20255 Male', Maldives</p>
                </div>
            </div>
        </div>
    )
};

export default CardFrontDoc;
