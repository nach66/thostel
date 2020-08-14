import React from 'react'
import About from '../components/About'
import Images from '../components/Images'
import Services from '../components/Servies'
import RoomsContainer from '../components/RoomsContainer';
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
//import OLMap from '../components/OLMap'
import Gallerys from '../components/Gallerys'

export default function Home() {
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
