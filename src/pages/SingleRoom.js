import React, { Component } from 'react'
import def from '../images/room-1.jpeg';
//import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from "../components/StyledHero";
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen: false,
            slug:this.props.match.params.slug,
            def
        };
    }

    handleExpand() {
        this.setState({ isOpen: true });
    }
    static contextType = RoomContext;
    
    render() {
        const { isOpen } = this.state;
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room){
            return (
                <div className="error">
                    <h3>לצערנו אין חדר כזה</h3>
                    <Link to="/rooms" className="btn-primary">
                        בחזרה לחדרים
                    </Link>
                </div>
            );
        }
        const {name, description, capacity, price,
            extras, minibar, tv, size, images} = room;
        const [mainImg,...defuldImg] = images;
            
        return (
            <>
                <StyledHero img={mainImg || def}>
                    <Banner title={name}>
                        <Link to="/rooms" className="btn-primary">
                            בחזרה לחדרים
                        </Link>
                    </Banner>
                </StyledHero>

                <section className="services">

                    <div className="container">
                        {defuldImg.map((item,index)=>{
                            return ( <div
                                    key={index} alt={name}
                                    style={{backgroundImage: `url(${item})`}}
                                    onClick={() => this.handleExpand()}>
                                        {isOpen && (<Lightbox mainSrc={item} onCloseRequest=
                                        {()=> this.setState({ isOpen: false })}/>)}    
                            </div>);                       
                        })}
                    </div>

                    </section>
                    
                <section >

                    <div className="single-room-info">
                        <article className="description">
                            <h3>פרטים</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>מידע</h3>
                            <h6>מחיר: ₪{price}</h6>
                            <h6>גודל החדר: {`${size} מ"ר`}</h6>
                            <h6>
                                כמות אנשים בחדר : {" "} {capacity > 1? 
                                `${capacity} אנשים`: `${capacity} person`}
                            </h6>
                            <h6> {tv? "טלוויזיה בכבלים עם מסך שטוח" : "אין טלוויזיה"}</h6>
                            <h6> {minibar && "מיני בר בחדר"} </h6>                            
                        </article>
                    </div>

                </section>

                <section className="room-extras">
                    <h6>בנוסף</h6>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                        return<li key={index}>- {item}</li> })}
                    </ul>
                </section>
            </>
        );
    }
}