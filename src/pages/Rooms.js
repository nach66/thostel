import React from 'react'
import Images from '../components/Images';
import Footer from '../components/Footer'
import RoomsContainer from '../components/RoomsContainer';
import ContactForm from '../components/ContactForm'
import Services from '../components/Servies'


export default function Rooms() {
    return (
        <>
            <Images title="החדרים שלנו" 
                    link="/"
                    link_text="חזרה לעמוד הבית"
            />
            <div className="sep"/>
            <Services/>
            <RoomsContainer/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    );
}
