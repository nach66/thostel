import React from 'react'
import About from '../components/About'
import Images from '../components/Images'
import Services from '../components/Servies'
import ContactForm from '../components/ContactForm'
import Gallerys from '../components/Gallerys'
import Footer from '../components/Footer'
import OLMap from '../components/OLMap'

export default function Home() {
    return (
        <>
            <Images title="הבית שלך בצפון" 
                    subtitle="חדרים החל מ200 ש''ח"
                    link="/rooms"
                    link_text="לחדרים"
            />
            
            <div className="sep"/>            
            <About/>
            <div className="sep"/>
            <Services/>
            <div className="sep"/>
            <OLMap/>
            <div className="sep"/>
            <Gallerys/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    );
}
