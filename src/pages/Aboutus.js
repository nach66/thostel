import React, { Component } from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import About from '../components/About'

export default class Aboutus extends Component {
    render() {
        return (
            <>
                <Images title="מי אנחנו" 
                    link="/"
                    link_text="חזרה לעמוד הבית"
                />
                <div className="sep"/>
                <About/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}