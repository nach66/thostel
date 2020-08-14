import React from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import {FaEnvelope,FaPhone} from 'react-icons/fa';
import tripadvisor from '../images/icons/tripadvisor.png'
import instagram from '../images/icons/instagram.jpg'
import ilh from '../images/icons/ilh.png'
import face from '../images/icons/fa.png'

export default function ContactForm() {

    return (
        <>
        <section className="services" >
            <Title title="דברו אלינו"/> 

            <FaPhone style={{ color:'rgb(7, 161, 58)'}}/>
            <h5>04-679-2611</h5>

            <a href={"mailto:tiberiashostel@gmail.com"} rel="noopener noreferrer" target="_blank">
                <FaEnvelope style={{ color:'#ebe050'}}/>
            </a>

            <h5>tiberiashostel@gmail.com</h5>

{/*             <article className="contact-icon">

                <a rel="noopener noreferrer" target={"_blank"} 
                    href='https://www.facebook.com/Tiberias-Hostel-1419006915066941/'>
                    <div style={{backgroundImage: `url(${face})`}}/>   
                </a>

                <a rel="noopener noreferrer" target={"_blank"} 
                    href='https://www.tripadvisor.co.il/Hotel_Review-g297765-d1198814-Reviews-Tiberias_Hostel-Tiberias_Galilee_Region_Northern_District.html'>
                    <div style={{backgroundImage: `url(${tripadvisor})`}}/>   
                </a> 

                <a rel="noopener noreferrer" target={"_blank"} 
                    href='http://www.hostels-israel.com/'>
                    <div style={{backgroundImage: `url(${ilh})`}}/>   
                </a> 

                <a rel="noopener noreferrer" target={"_blank"} 
                    href='https://www.instagram.com/tiberiashostel/'>
                    <div style={{backgroundImage: `url(${instagram})`}}/>   
                </a>
            </article> */}
        </section>

        </>
    );
}