import React from 'react'
import Footer from '../components/Footer'
import RoomsContainer from '../components/RoomsContainer';
import ContactForm from '../components/ContactForm'
import Services from '../components/Servies'


export default function Rooms() {
    return (
        <>
            <div className="sep"/>
            <Services/>
            <RoomsContainer/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    );
}
