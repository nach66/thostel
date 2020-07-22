import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaWifi,FaTemperatureLow,FaRegMoneyBillAlt, FaAnchor} 
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
                icon:<FaRegMoneyBillAlt/>,
                title:"כספומט"
            },
            {
                icon:<FaCocktail/>,
                title:"גג עם נוף פנורמי"
            },
            {
                icon:<FaAnchor/>,
                title:"אטרקציות במחירים מוזלים"
            },
            {
                icon:<FaTemperatureLow/>,
                title:"צוות מנוסה ואדיב"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="שירותים"/>
                 <div>אם תזדקקו למשהו נוסף, נשמח לעזור לך בכל דרך!</div>
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
