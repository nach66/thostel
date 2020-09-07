import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}