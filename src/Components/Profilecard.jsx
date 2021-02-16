import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function ProfileCard() {
    return (
        <div className='profileCard card'>

            <div className='profile-img'></div>
            <div className='profile--text'>
                <h1>K Shweta Kumari</h1>
                <p>Front-end developer</p>

                <div className='contact--text'>
                    <p className='email contact'><EmailIcon /> <span>shwetzwrk@gmail.com</span></p>
                    <p className='linkedin contact'><LinkedInIcon className='icon' /> <span>K Shweta Kumari</span></p>
                </div>

                <p>Hi! I am a self-taught front-end developer who enjoys building a pixel-perfect, dynamic website.</p>
            </div>


        </div>);
}

export default ProfileCard;