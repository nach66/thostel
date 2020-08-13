import React from 'react'
import def from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Route, Switch} from "react-router-dom";
  
export default function Activity({room}) {
    const {name,link,image,description} = room;
        return (
            <article className="activity">
                <div className="img-container-activity">
                    <img src={image || def} alt="single room"/>
                    <div className="img__description">
                        <p>{description}</p>                     
                        <a target={"_blank"} href={link}> לאתר >> </a>
                    </div>
                </div> 
                <p className="activity-info">{name}</p>   
            </article>
        );
    }
    
Activity.prototype={
        room:PropTypes.shape({
            name:PropTypes.string.isRequired,
            slug:PropTypes.string.isRequired,
            image:PropTypes.arrayOf(PropTypes.string).isRequired
        })
};