import React, { Component } from 'react'
import Images from '../components/Images'
import Footer from '../components/Footer'
import {FaEnvelope,FaPhone} from 'react-icons/fa';
import ContactForm from '../components/ContactForm'
import Title from '../components/Title';

export default class minihotel extends Component {
    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = './mini.html';
        this.instance.appendChild(s);
    };
    
    render() {
        return (
            <>
                
                <div ref={el => (this.instance = el)} />;

            </>
        )
    }
}
