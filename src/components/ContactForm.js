import React from 'react'
import Title from './Title'

export default function ContactForm() {
    return (
            <section className="services">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="דברו איתנו" />
                        <form className="mt-5">
                            {/* first */}
                            <div className="form-group"
                            >
                                <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="שם מלא"
                                />
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="email@gmail.com"
                                />
                            </div>
                            {/* subject */}
                            <div className="form-group">
                                <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="נושא"
                                />
                            </div>
                            {/* message */}
                            <div className="form" style={{marginLeft:'330px',width:'700px'}}>
                                <textarea
                                name="message"
                                className="form-control"
                                rows="10"
                                placeholder="הודעה"
                                />
                            </div>
                        </form>
                    </div>
            </section>
    );
}