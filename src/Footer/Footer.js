import React from 'react'
import './Footer.css'
import { BlogLogo } from '../Logo/Logo.stories'
import { TwitterLogo } from '../Icon/Icon.stories'

function Footer({}) {
  return (
    <footer>

        <div class="footer-section">
            <div class="footer-container">
                <div class="footer">                   
                    <div class="footer-column-1">
                        <div class="footer-heading footer-logo">
                            {/* <img src="/Illustrations/Logo-new.jpg" alt="logo for website" /> */}
                            <BlogLogo />
                        </div>
                            
                        <div class='footer-heading footer-2'>
                            <ul class='contact-methods'>
                                <li class="contact-me">
                                    CONTACT ME
                                </li>
                                <li>
                                    <a href="mailto:hi@midcardwrestling.com">Email</a>
                                </li>
                                <li>
                                    (+44) 780 922 3043
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-column-2">
                        <div class="footer-heading footer-3">
                            <ul class='general-footer-links'>
                                <li>
                                    <a href="/blogs/">Blog</a>
                                </li>
                                <li>
                                    <a href="/coolshit/">Cool shit</a>
                                </li>
                                <li>
                                    <a href="/trumps/">Top Trumps</a>
                                </li>            
                            </ul>
                        </div>
                    
                        <div class="footer-heading footer-4">
                            <TwitterLogo />
                            {/* <ul class="social-icons"> */}
                                {/* <div class="social-icons-row-1">
                                    <li>
                                        <a href="#" class="twitter-icon">
                                            <img src="/Illustrations/Logos:Icons /Twitter_white.svg" alt="Twitter logo" class="social-logos" />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="facebook-icon">
                                            <img src="/Illustrations/Logos:Icons /Facebook_white.svg" alt="Facebook logo" class="social-logos" />
                                        </a>
                                    </li> 
                                </div>
                                <div class="social-icons-row-2">    
                                    <li>
                                        <a href="#" class="linkedin-icon">
                                            <img src="/Illustrations/Logos:Icons /LinkedIN_white.svg" alt="LinkedIn logo" class="social-logos" />
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#" class="instagram-icon">
                                            <img src="/Illustrations/Logos:Icons /Instagram_white.svg" alt="Instagram Logo" class="social-logos" />
                                        </a>
                                    </li>  
                                </div>          */}
                            {/* </ul> */}
                        </div>
                    </div>
                </div> 
            </div>
        </div>  
    </footer> 
  )
}


export default Footer