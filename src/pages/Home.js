import React from 'react'
import '../assets/home.css'
import soccer from "../images/soccer.png"

import futsal from "../images/futsal.png"
import society from "../images/society.png"
import footvolley from "../images/footvolley.png"
import { Link } from 'react-router-dom'


function Home () {
    return (
        <>
            
            
            <div className="body">
                <h2>Fique por dentro dos maiores e melhores torneios de...</h2>
            </div>


            <div className="modalitiesTournaments">

           

                <div className="modalities1">
                    
                    
                    <div className="soccer">
                        <img src={soccer} alt="soccer"/>
                        <h3>Futebol</h3>
                    </div>
                


                
                    <div className="futsal">
                        <img src={futsal} alt="futsal"/>
                        <h3>Futsal</h3>
                    </div>
                    
                        
                </div>

                <div className="modalities2">

                    
                    <div className="society">
                        <img src={society} alt="society"/>
                        <h3>Society</h3>
                    </div>
                

                
                    <div className="footvolley">
                        <img src={footvolley} alt="footvolley"/>
                        <h3>Fut-Volei</h3>
                    </div>
                   

                </div>
            
            </div>

            
        </>
    )
}

export default Home