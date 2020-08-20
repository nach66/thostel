import React, { Component } from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import About from '../components/About'
import Gallerys from '../components/Gallerys'

export default class Aboutus extends Component {
    render() {
        return (
            <>
            <Images title="אכסניית טבריה" 
                    subtitle="הבית שלך בצפון"
                    link="/rooms"
                    link_text="לחדרים"
            />
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