import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import About from '../components/About'
import Gallerys from '../components/Gallerys'

export default class Aboutus extends Component {
    render() {
        return (
            <>
                <div className="sep"/>
                <About/>
                <div className="sep"/>
                <Gallerys/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}