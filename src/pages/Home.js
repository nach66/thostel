import React, { Component } from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
//import Search from '../components/Search'

export default class Home extends Component {
    render() {
        return (
            <>
            <Images title="אכסניית טבריה" 
                    subtitle="הבית שלך בצפון"
            />
                {/* <Search/> */}
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}