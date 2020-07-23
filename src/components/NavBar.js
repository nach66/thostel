import React, { Component } from 'react'
import logo from '../images/icons/logo.jpg'
import {FaAlignLeft, FaAnchor} from 'react-icons/fa'
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
                            <img src={logo} className="nav-icon" alt="logo"/>
                        </Link>
                        <button type="button" onClick={this.handleToggle} className="nav-btn">
                            <FaAlignLeft className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/amenities" className="nav-links">שירותים</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/rooms" className="nav-links">חדרים</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/gallery" className="nav-links">גלריה</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/error" className="nav-links">פעילויות</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/contact" className="nav-links">צור-קשר</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/location" className="nav-links">מיקום</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                        <Link to="/rooms" className="nav-links"
                        style={{border: '1px solid var(--myblue)',
                                color: 'var(--mainWhite)',
                            background: 'var(--niceGreen)'}}
                        >הזמן עכשיו!</Link>
                        </li>
                    </ul>
                </div>     
            </nav>
        )
    }
}