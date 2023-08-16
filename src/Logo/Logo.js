import React from 'react'
import PropTypes from 'prop-types';
import './Logo.css';
import imageFile from './Logo.jpg'

function Logo({logoPosition}) {
    const image = {
        src: imageFile,
        alt: 'website logo'
    }

  return (
    <div class={`logo`}>
        <a href="../" class="logo-style">
            <img src={image.src} alt={image.alt} />
        </a>
    </div>
  )
}

Logo.propTypes = {
  logoPosition: PropTypes.string,
}

export default Logo