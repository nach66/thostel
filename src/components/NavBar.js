import React, { Component } from 'react'
import logo from '../images/logo.jpg'
import {FaAlignRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    state={
        isOpen: false
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
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
                        <button type="button" onClick={this.handleToggle} className="nav-btn">
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/amenities">שירותים</Link>
                        </li>
                        <li>
                            <Link to="/rooms">חדרים</Link>
                        </li>
                        <li>
                            <Link to="/gallery">גלריה</Link>
                        </li>
                        <li>
                            <Link to="/error">פעילויות</Link>
                        </li>
                        <li>
                            <Link to="/contact">צור-קשר</Link>
                        </li>
                        <li>
                            <Link to="/location">מיקום</Link>
                        </li>
                        <li>                        
                            <button className="book-btn">
                                הזמן עכשיו!                                         
                            </button>
                        </li>
                    </ul>
                </div>     
            </nav>
        )
    }
}