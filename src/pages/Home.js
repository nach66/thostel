import React from 'react'
import Images from '../components/Images';
import Services from '../components/Servies';
import FeaturedRoom from '../components/FeaturedRoom';
import OLMap from '../components/OLMap'
import Gallerys from '../components/Gallerys'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import About from '../components/About'
import c from '../images/finjan.jpg'

export default function Home() {
    return (
        <>
            <Images title="הבית שלך בצפון" 
                    subtitle="חדרים החל מ200 ש''ח"
                    link="/rooms"
                    link_text="לחדרים"
            />
            
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
