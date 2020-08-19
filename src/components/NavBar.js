import React, { Component } from 'react'
import {FaAlignLeft, FaCalendarAlt, FaAnchor} from 'react-icons/fa'
import logo from '../images/icons/logo.jpg'
import l from '../images/icons/bet.png'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    state={
        isOpen: true
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">                        
                            <img src={logo} className="nav-logo" alt="logo"/>
                        </Link>
                        <button type="button" onClick={this.handleToggle} className="nav-btn">
                            <FaAlignLeft className="nav-icon"/>
                        </button>
                    </div>

                    <ul className={this.state.isOpen? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/" className="nav-links">מי אנחנו</Link>
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