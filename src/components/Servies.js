import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaWifi,FaTemperatureLow,FaRegMoneyBillAlt} 
from 'react-icons/fa';

export default class Servies extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"בר"
            },
            {
                icon:<FaWifi/>,
                title:"WiFi"
            },
            {
                icon:<FaTemperatureLow/>,
                title:"חדרים ממוזגים"
            },
            {
                icon:<FaRegMoneyBillAlt/>,
                title:"כספומט"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="שירותים"/> 
                אנו מציעים את כל השירותים המודרניים לנוחותכם במהלך שהותכם! אם תזדקקו למשהו נוסף, נשמח לעזור לך בכל דרך
                <div className="services-center">
                    {this.state.services.map(
                        (item, index) => {return (
                            <article key={index} className="services">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )}
                    )}
                </div>
            </section>
        );
    }
}
