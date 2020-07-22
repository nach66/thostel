import React from 'react'
import Title from './Title'
import {FaEnvelope, FaPhoneAlt, FaFacebookSquare} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import tripadvisor from '../images/tripadvisor.png'
import instagram from '../images/instagram.png'
import ilh from '../images/ilh.jpeg'
import fa from '../images/fa.png'

export default function ContactForm() {
    return (
        <>
        <section className="services">
            <Title title="דברו איתנו"/> 
            <article className="contact-icon">
                <Link target={"_blank"} to="/face" >
                    <div style={{backgroundImage: `url(${fa})`}}/>   
                </Link>
                <Link target={"_blank"} to='/trip'>
                    <div style={{backgroundImage: `url(${tripadvisor})`}}/>   
                </Link>
                <Link target={"_blank"} to='/insta'>
                    <div style={{backgroundImage: `url(${instagram})`}}/>   
                </Link>
                <Link target={"_blank"} to='/ilh'>
                    <div style={{backgroundImage: `url(${ilh})`}}/>   
                </Link>

            </article>
        </section>
        </>
    );
}