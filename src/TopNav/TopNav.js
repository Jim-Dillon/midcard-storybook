import React from 'react'
import { PrimaryNav } from '../Button/Button.stories'
import { BlogLogo } from '../Logo/Logo.stories'
import './TopNav.css'

function TopNav() {
  return (
    <div class="topnav">
            <div class='nav-wrapper'> 
                <BlogLogo />   

                <div class="dropdown-header">
                    <a href="#" class="dropdown-icon">
                        <img src="/Illustrations/dropdown-menu.svg" class="dropdown-image" />
                    </a>    
                    <a href="#" class="x-icon">
                        <img src="/Illustrations/xmenu.png" class="x-menu-image" />
                    </a>     
                    <ul class="dropdown-buttons">
                        <li class="dr-blog-button-box">
                            <a href="/blogs/" class="dr-blog-button">Blog</a>
                        </li>
                        <li class="dr-cool-shit-button-box">    
                            <a href="/coolshit/" class="dr-cool-shit-button">Cool Shit</a>
                        </li>
                        <li class="dr-trumps-button-box">    
                            <a href="/trumps" class="dr-trumps-button">Top Trumps</a>
                        </li>   
                        <li class="dr-contact-button-box"> 
                            <a href="mailto:hi@midcardwrestling.com" class="dr-contact-button">Contact</a>
                        </li>
                    </ul>   
                </div>




                <ul class="topnav-right">
                    <li class="blog-button-box">
                        <a href="/blogs/" class="blog-button">Blog</a>
                    </li>
                    <li class="cool-shit-button-box">    
                        <a href="/coolshit/" class="cool-shit-button">Cool Shit</a>
                    </li>
                    <li class="trumps-button-box">    
                        <a href="/trumps" class="trumps-button">Top Trumps</a>
                    </li>
                    <li>
                        <PrimaryNav>Read More</PrimaryNav>   
                    </li> 
                </ul>
            </div> 
        </div>
  )
}

export default TopNav