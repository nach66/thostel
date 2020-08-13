import React, { Component } from 'react'
import Title from './Title';

import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';

import a from '../images/kinneret.jpg'
import b from '../images/finjan.jpg'
import c from '../images/cover.jpg'
import d from '../images/boat.jpg'

import e from '../images/rooms/room-2.jpeg'
import f from '../images/rooms/room-3.jpeg'
import g from '../images/rooms/room-4.jpeg'
import h from '../images/rooms/room-5.jpeg'

export default class Gallerys extends Component {
    state = {
        photoIndex: 0,
        isOpen_view: false,
        isOpen_hostel: false,
        hostel_images: [e,f,g,h],
        view_images: [a,b,c,d]
    }

    render() {
        const { isOpen_view } = this.state;
        const { isOpen_hostel } = this.state;
        const { photoIndex } = this.state;
        const { hostel_images } = this.state;
        const { view_images } = this.state;
        return (
            <>
                <section className="services">
                    <Title title="תמונות מההוסטל"/> 
                    <div className="container">
                        {hostel_images.map((item,index)=>{
                            return ( <div
                                        key={index} alt="pic"
                                        style={{backgroundImage: `url(${item})`}}
                                        onClick={() => this.setState({ isOpen_hostel: true, photoIndex: index })}
                                        >
                                    </div>);                       
                        })}
                        {isOpen_hostel && (
                            <Lightbox
                                            mainSrc={hostel_images[photoIndex]}
                                            nextSrc={hostel_images[(photoIndex + 1) % hostel_images.length]}
                                            prevSrc={hostel_images[(photoIndex + hostel_images.length - 1) % hostel_images.length]}
                                            onCloseRequest={() => this.setState({ isOpen_hostel: false })}
                                            onMovePrevRequest={() => this.setState({
                                                photoIndex: (photoIndex + hostel_images.length - 1) % hostel_images.length
                                            })}
                                            onMoveNextRequest={() => this.setState({
                                                photoIndex: (photoIndex + 1) % hostel_images.length
                                            })}
                            />
                        )}
                    </div>
                </section>
                <div className="sep"/>
                <section className="services">
                    <Title title="נופים בסביבה"/> 
                    <div className="container">
                    {view_images.map((item,index)=>{
                            return ( <div
                                        key={index} alt="pic"
                                        style={{backgroundImage: `url(${item})`}}
                                        onClick={() => this.setState({ isOpen_view: true, photoIndex: index })}
                                        >
                                    </div>);                       
                        })}
                        {isOpen_view && (
                            <Lightbox
                                            mainSrc={view_images[photoIndex]}
                                            nextSrc={view_images[(photoIndex + 1) % view_images.length]}
                                            prevSrc={view_images[(photoIndex + view_images.length - 1) % view_images.length]}
                                            onCloseRequest={() => this.setState({ isOpen_view: false })}
                                            onMovePrevRequest={() => this.setState({
                                                photoIndex: (photoIndex + view_images.length - 1) % view_images.length
                                            })}
                                            onMoveNextRequest={() => this.setState({
                                                photoIndex: (photoIndex + 1) % view_images.length
                                            })}
                            />
                        )}
                    </div>
                </section>
            </>
        );
    }
}