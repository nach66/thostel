import React, { Component } from 'react'
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import c from '../images/kinneret.jpg'
import Title from './Title';

export default class Gallerys extends Component {
    state = {
        isOpen: false
    }

    handleExpand() {
        this.setState({ isOpen: true });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <>
                <section className="services">
                <Title title="תמונות מההוסטל"/> 
                    <div className="container">
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                    </div>
                </section>
                

                <section className="services">
                <Title title="נופים בסביבה"/> 
                <div className="gallery-root">
                    <div className="container">
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                        <div
                            style={{backgroundImage: `url(${c})`}}
                            onClick={() => this.handleExpand()}>
                            {isOpen && (<Lightbox mainSrc={c} onCloseRequest={()=> 
                                this.setState({ isOpen: false })}/>)}    
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}