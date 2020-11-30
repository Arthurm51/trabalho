import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import gerrard from "../images/gerrard.jpg"
import gerrardflip from "../images/gerrardflip.jpg"
import "../assets/header.css"




function Header() {
    return (
        <header id="header">
            <div className="top">
                <img src={gerrardflip} alt="gerrard"/>
                <div className="menus">
                    
                    <div className="menuTitle">
                        
                            <h1><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                SPORTS TOURNAMENTS
                                </Link>
                            </h1>
                        
                    </div>
                    
                    
                    <div className="menuBar">
                        
                            <h3 className='login'><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                LOGIN
                                </Link>
                            </h3>
                        
                        
                        
                            <h3 className='tournaments'><Link to="/menu" style={{ textDecoration: 'none', color: 'white'}}>
                                TORNEIOS</Link>
                            </h3>
                        
                            
                        
                        
                        
                            <h3 className='registrations'><Link to="/newTournaments" style={{ textDecoration: 'none', color: 'white' }}>
                                CADASTRO
                                </Link>
                            </h3>
                        
                        
                    </div>
                </div>
                
                
                <img src={gerrard} alt="gerrard"/>
            </div>
            


            
                

        </header>

        
    )
}
export default Header;