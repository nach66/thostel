import React, { Component } from 'react'
import {FaSortDown, FaAlignLeft, FaCalendarAlt, FaAnchor} from 'react-icons/fa'
import logo from '../images/icons/logo.jpg'
import { Dropdown } from "react-bootstrap"
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
                            <Link to="/about" className="nav-links">מי אנחנו</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/rooms" className="nav-links">איך זה עובד?</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li> 
                            <Dropdown>
                                <Dropdown.Toggle>
                                    פעילויות באזור
                                    <span style={{ fontSize:'1.2rem',marginTop:'3px',marginRight:'8px'}}>
                                        <FaSortDown/>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className="scroll">
                                        <Link to="/water" className="nav-links">פעילויות מים</Link>
                                        <Link to="/rest" className="nav-links">מקומות מרבץ</Link>
                                        <Link to="/attractions" className="nav-links">אטרקציות שוות</Link>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/gallery" className="nav-links">בואו לראות</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/location" className="nav-links">מצאו אותנו</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                            <Link to="/contact" className="nav-links">דברו אלינו</Link>
                        </li>
                        <FaAnchor className="anchor"/>
                        <li>
                        <Link to="/bookhere" 
                            className="nav-links"
                            style={{width: '200px',                           
                                color: 'var(--mainWhite)',
                                background : 'var(--mainGreen)'}}
                            >אפשר כבר להזמין!
                            <span style={{ fontSize: '1.8rem',
                                    marginTop: '3px',marginRight:'8px'}}>
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