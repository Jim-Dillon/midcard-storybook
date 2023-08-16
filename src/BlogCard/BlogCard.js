import React from 'react';
import PropTypes from 'prop-types';
import './BlogCard.css';
import BlogImage from './BlogImage.jpg';
import { ReadMore } from '../Button/Button.stories';

function BlogCard({ cardback, cardwords, border, imageBorder, imageWidth, minutealt }) {

    const BlogCardImage = {
        src: BlogImage,
        alt: 'card one image'
    }

    // BlogCard.propTypes = {
    //     cardback: PropTypes.string,
    // };


  return (
    <div class={`card-one ${border} ${cardback} carousel__cards`}>
        <img src={BlogCardImage.src} alt={BlogCardImage.alt} className={`image-outline ${imageBorder} ${imageWidth} card-one-image`} />
        <div class={`home-blog-card-content ${cardback}`}>
            <div class={`minute-read-container ${minutealt}`}>
                <div class="minute-read-">8 min read                            
                </div>
            </div>
            <div class={`card-words home-card-words ${cardwords}`}>
                <h3 class="card-title-1">Why I, in my late 20s, am still in love with pro-wrestling</h3>
                <p>Jim explains how his love of wrestling has transcended from childhood to adulthood</p>
                <ReadMore />
            </div>                   
        </div>
    </div>
  )
}

BlogCard.propTypes = {
    cardback: PropTypes.string,
    minutealt: PropTypes.string,
    border: PropTypes.string,
    imageBorder: PropTypes.string,
    imageWidth: PropTypes.string,
};

export default BlogCard