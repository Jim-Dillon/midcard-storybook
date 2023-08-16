import React from 'react';
import './Icon.css';
import twitterFile from'./Social-Icons/Twitter_icon.svg'
import facebookFile from'./Social-Icons/Facebook_icon.svg'
import linkedinFile from'./Social-Icons/LinkedIN_icon.svg'
import instagramFile from'./Social-Icons/Instagram_icon.svg'


function Icon() {

    const twitterImage = {
        src: twitterFile,
        alt: 'twitter logo'
        }

        const facebookImage = {
            src: facebookFile,
            alt: 'facebook logo'
        }

        const linkedInImage = {
            src: linkedinFile,
            alt: 'linkedin logo'
        }

        const instagramImage = {
            src: instagramFile,
            alt: 'instagram logo'
        }


  return (
    <ul class="social-icons">
        <li><a href="#" class="twitter-icon">
            <img src={twitterImage.src} alt={twitterImage.alt} class="social-logos" />
            </a>
        </li>

        <li><a href="#" class="facebook-icon">
            <img src={facebookImage.src} alt={facebookImage.alt} class="social-logos" />   
            </a>
        </li> 

        <li><a href="#" class="linkedin-icon">
            <img src={linkedInImage.src} alt={linkedInImage.alt} class="social-logos" /> 
            </a>
        </li>
                                    
        <li><a href="#" class="instagram-icon">
            <img src={instagramImage.src} alt={instagramImage.alt} class="social-logos" />    
            </a>
        </li>     
    </ul> 
  )
}


export default Icon