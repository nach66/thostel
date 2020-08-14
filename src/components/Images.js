import React, { Component } from 'react'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import a from '../images/כותרת/n1.jpg'
import b from '../images/כותרת/n2.jpg'
import c from '../images/כותרת/n3.jpg'
import d from '../images/כותרת/n4.jpg'

import tripadvisor from '../images/icons/tripadvisor.png'
import instagram from '../images/icons/instagram.jpg'
import ilh from '../images/icons/ilh.png'
import face from '../images/icons/fa.png'

export default class Images extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [a,b,c,d]
        };
    }

    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
        } else {
        this.setState({
            currentImage: 0
        });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 3000);
    }

    render() {
        return (
            <div className="switch">
                <div style={{ backgroundRepeat: 'no-repeat', 
                    backgroundImage: `url(${this.state.images[this.state.currentImage]})`}}>
                    <Hero>
                        <Banner title={this.props.title}
                            subtitle={this.props.subtitle}>
                            <Link to={this.props.link} className="btn-primary2">
                                {this.props.link_text}
                            </Link>
                        </Banner>
                    </Hero>
                    <div className="contact-icon">
                    <a rel="noopener noreferrer" target={"_blank"} 
                        href='https://www.facebook.com/Tiberias-Hostel-1419006915066941/'>
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
                </div>
            </div>
        );
    }
}