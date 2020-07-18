import React from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <>
            <Images title="צור קשר" 
                link="/"
                link_text="חזרה לעמוד הבית"
            />
            <ContactForm/>
        </>
    );
}