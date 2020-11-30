import React, { useState, useLayoutEffect} from 'react'

import { Redirect } from 'react-router-dom'
import '../assets/menu.css'
import Firebase from '../services/FirebaseConnect'

function Menu() {
    

    const logoff = () => {
        sessionStorage.removeItem("uuid")
        Firebase
            .auth()
            .signOut()
            .then(()=>{
                return <Redirect to={{pathname:"/login"}} />
            }).catch(()=>{
                return <Redirect to={{pathname:"/login"}} />
            })
    }


    const [lista, setLista] = useState([])

    useLayoutEffect(()=>{
        Firebase
            .database()
            .ref(`/tournaments`)
            .on('value', snapchot => {
                if(snapchot.val()){
                    let dados = snapchot.val()
                    const keys = Object.keys(dados)
                    const lista = keys.map((key)=>{
                        return { ...dados[key], id: key}
                    })
                    setLista(lista)
                    console.log(lista)
                }else{
                    setLista([])
                }
                
            })
    }, [])

    const excluir = (item) => {
        console.log(item)
        Firebase
            .database()
            .ref(`/tournaments/${item.id}`)
            .remove()
    }

    return(
        <>


        <button type="submit" onClick={logoff}>Logoff</button>


        
        {lista.map((item, key)=> {
            return <div className="allMenu">

                
                <div className="modalitiesMenu">
                    <h1 style={{marginLeft: '10px'}}>Modalidade: {item.modalitie}</h1>
                </div>
                
                <div className="dataMenu">
                    <h3 style={{marginLeft: '10px'}}>Data e hora: {item.data}</h3>
                </div>
                
                <div className="localMenu">
                    <h3 style={{marginLeft: '10px'}}>Local: {item.local}</h3>
                </div>

                <div className="rewardMenu">
                    <h3 style={{marginLeft: '10px'}}>Recompensa: {item.reward}</h3>
                </div>

                <div className="contactMenu">
                    <h3 style={{marginLeft: '10px'}}>Contato: {item.contact}</h3>
                </div>

                <div className="deleteMenu">
                    <button type="submit" onClick={()=> excluir(item)}>Excluir</button>
                </div>
                
                
                    
                
            </div>
                    
                


        
        
                
            
            
            
            
        })}










        

        







        </>
    )






    
}

export default Menu;

