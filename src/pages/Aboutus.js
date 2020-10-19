import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import About from '../components/About'
import Gallerys from '../components/Gallerys'
import Search from '../components/Search'
import Services from '../components/Services'

export default class Aboutus extends Component {
    render() {
        return (
            <>
                <div className="sbest_price"
                    style={{
                        zIndex: '1'
                    }}/>
                <div className="best_price"
                    style={{
                        position: 'absolute',
                        top: '70px',
                        right: '55px'
                }}/>
                <br/>
                <Search/>
                <div className="sep"/>
                <About/>
                <div className="sep"/>
                <Services/>
                <Gallerys/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}