import React from 'react'
import Footer from '../components/Footer'
import Images from '../components/Images';
import ContactForm from '../components/ContactForm'
import ActivitiesContainer from '../components/ActivitiesContainer';

export default function Rest() {
    return (
        <>
            <Images title="אטרקציות שוות באזור" 
                link="/"
                link_text="חזרה לעמוד הבית"
            />
            <div className="sep"/>
            <ActivitiesContainer/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    )
}
