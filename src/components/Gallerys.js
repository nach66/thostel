import React, { Component } from 'react'
//import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import a from '../images/kinneret.jpg'
import b from '../images/finjan.jpg'
import c from '../images/cover.jpg'
import d from '../images/boat.jpg'
import Title from './Title';

import e from '../images/rooms/room-2.jpeg'
import f from '../images/rooms/room-3.jpeg'
import g from '../images/rooms/room-4.jpeg'
import h from '../images/rooms/room-5.jpeg'

export default class Gallerys extends Component {
    state = {
//        isOpen: false,
        hostel_images: [e,f,g,h],
        view_images: [a,b,c,d]
    }

//    handleExpand() {
  //      this.setState({ isOpen: true });
    //}

    render() {
 //       const { isOpen } = this.state;
        return (
            <>
                <section className="services">
                    <Title title="תמונות מההוסטל"/> 
                    <div className="container">
                        {this.state.hostel_images.map((item,index)=>{
                            return ( <div
                                    key={index} alt="pic"
                                    style={{backgroundImage: `url(${item})`}}
                                    onClick={() => this.handleExpand()}> 
                                </div>);                       
                        })}
                    </div>
                </section>
                <div className="sep"/>
                <section className="services">
                    <Title title="נופים בסביבה"/> 
                    <div className="container">
                            {this.state.view_images.map((item,index)=>{
                                return ( <div
                                        key={index} alt="pic"
                                        style={{backgroundImage: `url(${item})`}}
                                        onClick={() => this.handleExpand()}>    
                                    </div>);                       
                            })}
                    </div>
                </section>
            </>
        );
    }
}


/* {isOpen && (<Lightbox mainSrc={item} onCloseRequest=
    {()=> this.setState({ isOpen: false })}/>)} */  