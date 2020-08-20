import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaWindowClose, FaAlignLeft, FaCalendarAlt, FaAnchor} from 'react-icons/fa'
import logo from '../images/icons/logo.jpg'
import l from '../images/icons/bet.png'
//import ScrollToTop from "../ScrollToTop";
import * as Scroll from 'react-scroll';
import { Link as ll, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
export default class NavBar extends Component {
    state={
        isOpen: true
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    componentDidMount () {
        this.setState({
            isOpen: true
        });
    }

    scrollToTop () {
        scroll.scrollToTop();
    }
    
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" >                        
                            <img src={logo} onClick={this.scrollToTop} className="nav-logo" alt="logo"/>
                        </Link>
                        <button type="button" onClick={this.handleToggle} className="nav-btn">
                            {this.state.isOpen? 
                                <FaAlignLeft className="nav-icon"/> :
                                <FaWindowClose className="nav-icon"/> 
                            }
                            </button>
                    </div>

                    <ul 
                    className={this.state.isOpen? "nav-links show-nav" : "nav-links"} 
                    onClick={this.handleToggle}
                    >
                        <li>
                            <Link to="/" className="nav-links" >מי אנחנו</Link>
                        </li>
                        <img src={l} className="anchor" alt="logo"/>
                        <li>
                            <Link to="/rooms" className="nav-links">החדרים שלנו</Link>
                        </li>
                        <img src={l} className="anchor" alt="logo"/>
                        <li> 
                        <Link to="/activities" className="nav-links">פעילויות באזור</Link>
                        </li>
                        <img src={l} className="anchor" alt="logo"/>
                        <li>
                            <Link to="/location" className="nav-links">מצאו אותנו</Link>
                        </li>
                        <img src={l} className="anchor" alt="logo"/>
                        <li>
                            <Link to="/contact" className="nav-links">דברו אלינו</Link>
                        </li>
                        <img src={l} className="anchor" alt="logo"/>
                        <li>
                        <Link to="/bookhere" 
                            className="nav-links"
                            style={{width: '200px',  
                                marginRight: '15PX',                         
                                color: 'var(--mainWhite)',
                                background : 'var(--mainGreen)'}}
                            >אפשר כבר להזמין!
                            <span className="calander-icon" >
                                <FaCalendarAlt/>
                            </span>
                        </Link>
                        </li>
                    </ul>
                </div>     
            </nav>
        )
    }
}