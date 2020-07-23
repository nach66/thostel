import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaWifi,FaUtensils,FaParking,
    FaSmileBeam,FaRegMoneyBillAlt,FaAngellist, FaAnchor} 
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
                icon:<FaAngellist/>,
                title:"גג עם נוף פנורמי"
            },
            {
                icon:<FaAnchor/>,
                title:"אטרקציות במחירים מוזלים"
            },
            {
                icon:<FaSmileBeam/>,
                title:"צוות מנוסה ואדיב"
            },
            {
                icon:<FaUtensils/>,
                title:"מטבח מאובזר"
            },
            {
                icon:<FaParking/>,
                title:"חניה חינם"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="שירותים"/>
                 <h5>אם תזדקקו למשהו נוסף, נשמח לעזור לכם בכל דרך!</h5>
                <div className="services-center">
                    {this.state.services.map(
                        (item, index) => {return (
                            <article key={index}>
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
