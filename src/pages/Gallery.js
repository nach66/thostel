import React, { Component } from 'react'
import Gallerys from '../components/Gallerys';
import Images from '../components/Images';
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default class Gallery extends Component {    

    state = {
        isOpen: false
    }

    handleExpand() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <>
                <Images title="גלריה" 
                    link="/"
                    link_text="חזרה לעמוד הבית"
                />
                <div className="sep"/>
                <Gallerys/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}