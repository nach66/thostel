import React, { Component } from 'react'
import Images from '../components/Images'
import Footer from '../components/Footer'
import {FaEnvelope,FaPhone} from 'react-icons/fa';
import ContactForm from '../components/ContactForm'

export default class Booking extends Component {
    render() {
        return (
            <>
                <Images title="הזמנה" link="/"
                    link_text="חזרה לעמוד הבית"/>
                <div className="sep"/>
                <section className="empty-services">
                    <h6>להזמנות קבוצתיות של 10 אנשים ומעלה, אנא פנו אלינו - בדוא"ל, בטלפון, או בעזרת הצ'אטבוט</h6>
                        <article>
                            <FaPhone style={{ color:'rgb(7, 161, 58)'}}/>
                            <h6>04-679-2611</h6>
                        </article>
                        <article>
                            <a href={"mailto:tiberiashostel@gmail.com"} rel="noopener noreferrer" target="_blank">
                            <FaEnvelope style={{ color:'#ebe050'}}/></a>
                            <h6>tiberiashostel@gmail.com</h6>
                        </article>
                    <iframe title="book" width="85%" height="600px" scrolling="auto"
                        src="https://new-booking.frontdeskmaster.com?hostelId=AJKOwMNX%2F5UDIgGxDhqQRY6JrRNTS%2BGr"/>
                </section>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        )
    }
}
