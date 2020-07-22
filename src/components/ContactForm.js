import React from 'react'
import Title from './Title'
import {FaEnvelope, FaPhoneAlt, FaFacebookSquare} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function ContactForm() {
    return (
        <>
        <section className="services">
        <Title title="דברו איתנו"/> 

                <Link to='https://react.semantic-ui.com/'>
                <FaFacebookSquare 
                    style={{color: 'blue'}}
                    className="contact-icon"/>
                </Link>
            
                <Link to='https://react.semantic-ui.com/'>
                <FaEnvelope 
                    style={{color: 'var(--mainWhite)'}}
                    className="contact-icon"/>
                </Link>

                <Link to='https://react.semantic-ui.com/'>
                <FaPhoneAlt 
                    style={{color: 'rgb(7, 161, 58)'}}
                    className="contact-icon"/>
                </Link>
            
        </section>
        </>
    );
}