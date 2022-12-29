import React, { Component } from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'

export default class minihotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isloading: true
        }
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({
                isloading: false
            });
        }.bind(this), 1000);
    }
    
    render() {
        console.log(this.state.idloading);
        return (
            <>
                <div className="sep"/>
                    {/* <Title title="הזמנה"/> */}
                    <div
                        style={{
                            padding: '0rem',
                            textAlign: 'center'
                        }}
                    >
                            <h6>להזמנות קבוצתיות של 10 אנשים ומעלה, אנא</h6>
                            <Link 
                                style={{
                                    fontWeight: '600',
                                    color: 'rgb(0, 88, 139)',
                                    fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif'
                                }}
                                to="/contact" > פנו אלינו ישירות  :) 
                            </Link>
                    </div>

                    {this.state.isloading && <Loading/>}
                    
                    <iframe id="be_iframe" frameborder="0.5" scrolling="yes" title="booking"
                                    style={{width: '100%', height:'2850px', 
                                            padding:'30px', overflow: 'hidden'}} 
                                    src="https://new-booking.frontdeskmaster.com/?hostelId=zRrshXqJSiXA4t95Q8TUGIQCPaoMgpt6">
                    </iframe>
                    <div className="sep"/>
                    <ContactForm/>
                    <Footer/>
                </>
        )
    }
}

/* <iframe title="book" width="95%" height="600px" scrolling="auto"
src="https://new-booking.frontdeskmaster.com?hostelId=AJKOwMNX%2F5UDIgGxDhqQRY6JrRNTS%2BGr"/> */