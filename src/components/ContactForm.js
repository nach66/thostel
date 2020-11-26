import React from 'react'
import Title from './Title'
import {FaMapMarked, FaEnvelope,FaPhone} from 'react-icons/fa';
import tripadvisor from '../images/icons/tripadvisor.png'
import instagram from '../images/icons/instagram.jpg'
import ilh from '../images/icons/ilh.png'
import face from '../images/icons/fa.png'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <>
            <section className="services">
                <Title title="צור קשר"/> 
                <div className="about">
                    <article style={{
                        paddingTop:'4px'
                    }}>
                        <h6>אל תהססו לפנות אלינו בכל שאלה!</h6>
                        <h6>שעות הקבלה שלנו הן 8:00-23:00</h6>
                        <a href="tel:04-679-2611">
                                <FaPhone style={{ 
                                    padding: '4px',
                                    fontSize: '1.9rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'var(--mainGrey)',
                                    border: '2px groove var(--offWhite)',
                                    color:'rgb(7, 161, 58)'}}/>
                            </a>
                        <h6>04-679-2611</h6>

                        <a href={"mailto:tiberiashostel@gmail.com"} rel="noopener noreferrer" target="_blank">
                                <FaEnvelope style={{ 
                                    padding: '4px',
                                    fontSize: '1.9rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'var(--mainGrey)',
                                    border: '2px groove var(--offWhite)',
                                    color:'#ebe050'}}/>
                            </a>
                        <h6>tiberiashostel@gmail.com</h6>

                        <a href={"https://www.google.co.il/maps/place/Tiberias+Hostel/@32.7886111,35.5219349,14z/data=!4m11!1m2!2m1!1z15DXm9eh16DXmdeZ16og15jXkdeo15nXlA!3m7!1s0x151c3e48ddd195df:0x2bf279e8d24c26b4!5m2!4m1!1i2!8m2!3d32.7886111!4d35.5394444"} rel="noopener noreferrer" target="_blank">
                                <FaMapMarked style={{ 
                                    padding: '4px',
                                    fontSize: '1.9rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'var(--mainGrey)',
                                    border: '2px groove var(--offWhite)',
                                    color:'var(--myblue)'}}/>
                            </a>
                        <h6>כיכר רבין, טבריה. מיקוד: 1411501, תיבת דואר 1514.</h6>
                        <h6>הכניסה מימין לבנק הבינלאומי.</h6>

                        <div className="contact-icon">
                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='https://www.facebook.com/tiberiashostel/'>
                                <div style={{backgroundImage: `url(${face})`}}/>   
                            </a>

                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='https://www.tripadvisor.co.il/Hotel_Review-g297765-d1198814-Reviews-Tiberias_Hostel-Tiberias_Galilee_Region_Northern_District.html'>
                                <div style={{backgroundImage: `url(${tripadvisor})`}}/>   
                            </a> 

                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='http://www.hostels-israel.com/'>
                                <div style={{backgroundImage: `url(${ilh})`}}/>   
                            </a> 

                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='https://www.instagram.com/tiberiashostel/'>
                                <div style={{backgroundImage: `url(${instagram})`}}/>   
                            </a>
                        </div>
                    </article>

                    <article>
                        <h6>אפשר להשאיר הודעה ונחזור אליכם:</h6>
                        <form className="cform" method="POST"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/xayldodj">
                            {/* name */}
                                <div className="form-group">
                                        <input
                                            type="text"
                                            name="Name"
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
                                            className="form-control long"
                                            rows="11"
                                            placeholder="היי שלום, רציתי לדעת..."
                                        />
                                        </div>
                            {/* sumbit */}
                                {status === "SUCCESS" ? <p>תודה!</p> : <button className="submit" type="submit">שליחה</button>}
                                {status === "ERROR" && <p>אוי! קרתה תקלה, אנא נסו שוב.</p>}
                        </form>
                    </article>
                </div>
            </section>
        </>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
            } else {
            this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}