import React, {useState, useLayoutEffect} from 'react'
import '../assets/newTournament.css'
import Firebase from '../services/FirebaseConnect'
import {v4 as uuidv4} from 'uuid';



function NewTournaments() {
    const [modalitie, setModalitie] = useState("")
    const [data, setData] = useState("")
    const [local, setLocal] = useState("")
    const [reward, setReward] = useState("")
    const [contact, setContact] = useState("")

    const clear = ()=> {
        setModalitie("")
        setData("")
        setLocal("")
        setReward("")
        setContact("")
    }

    const save = () =>{
        let object = {
            modalitie: modalitie,
            data: data,
            local: local,
            reward: reward,
            contact: contact
        }

        let code = uuidv4()

        Firebase
            .database()
            .ref(`tournaments/${code}`)
            .set(object)
            .then(()=>{
                clear()
            })
            .catch((erro)=>{
                console.log(erro)
            })
    }

    return(
        <>
            <div className="newTournament">

                <div className="top">
                    <h1>Divulgue aqui seu torneio</h1>
                </div>

                <div className="modalitieNewTournament">
                    <h3>Modalidade do torneio:</h3>
                    <textarea name="modalitieNewTournament" id="modalitieNewTournament" value={modalitie} onChange={(e)=> setModalitie(e.target.value)} ></textarea>
                </div>

                <div className="dataNewTournament">
                    <h3>Data e hora:</h3>
                    <textarea name="dataNewTournament" id="dataNewTournament" value={data} onChange={(e)=> setData(e.target.value)} ></textarea>
                </div>

                <div className="localNewTournament">
                    <h3>Local:</h3>
                    <textarea name="localNewTournament"  id="localNewTournament" value={local} onChange={(e)=> setLocal(e.target.value)}></textarea>
                </div>

                <div className="rewardNewTournament">
                    <h3>Premiação:</h3>
                    <textarea name="rewardNewTournament" id="rewardNewTournament" value={reward} onChange={(e)=> setReward(e.target.value)} ></textarea>
                </div>

                <div className="contactNewTournament">
                    <h3>Contato:</h3>
                    <textarea name="contactNewTournament" id="contactNewTournament" value={contact} onChange={(e)=> setContact(e.target.value)} ></textarea>
                </div>

                <div className="buttonNewTournament">
                    <button type="submit" onClick={save}>Criar</button>
                </div>
            </div>
            
            


        </>

    )
}


export default NewTournaments;