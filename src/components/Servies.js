import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} 
from 'react-icons/fa';

export default class Servies extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'lorem mmmmm'
            },
            {
                icon:<FaHiking/>,
                title:"endless hiking",
                info:'lorem mmmmm'
            },
            {
                icon:<FaShuttleVan/>,
                title:"good drivers",
                info:'lorem mmmmm'
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:'lorem mmmmm'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/> 
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
