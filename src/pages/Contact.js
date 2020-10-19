import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'

export default class Contact extends Component {
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
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}