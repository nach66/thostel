import React from 'react'
import Title from './Title'
import {FaEnvelope,FaPhone, FaSearchLocation} from 'react-icons/fa';
import tripadvisor from '../images/icons/tripadvisor.png'
import instagram from '../images/icons/instagram.jpg'
import ilh from '../images/icons/ilh.png'
import face from '../images/icons/fa.png'

export default function ContactForm() {

    return (
        <>
            <section className="empty-services">
                <Title title="דברו אלינו"/> 
                <div className="abuot">
                    <article>
                        <h6>אל תהססו לפנות אלינו בכל שאלה, אנו נענה בשעות הקבלה 8:00-23:00</h6>
                        <FaPhone style={{ color:'rgb(7, 161, 58)'}}/>
                        <h6>04-679-2611</h6>
                        <a href={"mailto:tiberiashostel@gmail.com"} rel="noopener noreferrer" target="_blank">
                            <FaEnvelope style={{ color:'#ebe050'}}/>
                        </a>
                        <h6>tiberiashostel@gmail.com</h6>
                        <FaSearchLocation style={{ color:'var(--myblue)'}}/>
                        <h6>כיכר רבין, טבריה. מיקוד: 1411501, תיבת דואר 1514.</h6>
                        <h6>הכניסה מימין לבנק הבינלאומי.</h6>
                    </article>

                    <article>
                        <section className="py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <form
                                        className="mt-5" method="POST"
                                        action="https://formspree.io/nach666@gmail.com"
                                    >
                                        {/* first */}
                                        <div className="form-group">
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            placeholder="שם"
                                        />
                                        </div>
                                        {/* email */}
                                        <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="אימייל"
                                        />
                                        </div>
                                        {/* phone */}
                                        <div className="form-group">
                                            <input
                                            type="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="מספר טלפון"
                                        />
                                        </div>
                                        {/* message */}
                                        <div className="form">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            rows="10"
                                            placeholder="היי שלום, רציתי לדעת..."
                                        />
                                        </div>
                                        {/* sumbit */}
                                        <input className="btn-primary2"
                                            type="submit"
                                            value="שלח"
                                            style={{
                                                position: 'relative',
                                                bottom:'23px'
                                            }}
                                        />
                                    </form>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </section>
        </>
    );
}