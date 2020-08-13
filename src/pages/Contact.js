import React, { Component } from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default class Contact extends Component {
    render() {
        return (
            <>
                <Images title="מיקום והכוונה" 
                    link="/"
                    link_text="חזרה לעמוד הבית"
                />
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}