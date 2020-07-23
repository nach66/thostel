import React from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import {FaEnvelope,FaPhone} from 'react-icons/fa';
import tripadvisor from '../images/icons/tripadvisor.png'
import instagram from '../images/icons/instagram.png'
import ilh from '../images/icons/ilh.jpeg'
import face from '../images/icons/fa.png'

export default function ContactForm() {

    return (
        <>
        <section className="services" >
            <Title title="דברו איתנו"/> 

            <FaPhone style={{ color:'rgb(7, 161, 58)'}}/>
            <h5>04-679-2611</h5>

            <a href={"mailto:tiberiashostel@gmail.com"} target="_blank">
                <FaEnvelope style={{ color:'#ebe050'}}/>
            </a>

            <h5>tiberiashostel@gmail.com</h5>

            <article className="contact-icon">
                <Link target={"_blank"} to="/face" >
                    <div style={{backgroundImage: `url(${face})`}}/>   
                </Link>
                <Link target={"_blank"} to='/trip'>
                    <div style={{backgroundImage: `url(${tripadvisor})`}}/>   
                </Link>
                <Link target={"_blank"} to='/insta'>
                    <div style={{backgroundImage: `url(${instagram})`}}/>   
                </Link>
                <Link target={"_blank"} to='/ilh'>
                    <div style={{
                          borderColor: '#222',
                          backgroundImage: `url(${ilh})`}}/>   
                </Link>

            </article>
        </section>
        </>
    );
}