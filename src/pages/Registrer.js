import React from 'react'
import "../assets/register.css"

function Register () {
    return (
        <>

        <div className="pagRegister">

            <div className="nameRegister">
                <h3>Nome completo:</h3>
                <input type="text" name="nameRegister" id="nameRegister"/>
            </div>

            <div className="emailRegister">
            
            <h3>E-mail:</h3>
            <input type="email" name="emailRegister" id="emailRegister"/>
              
            </div>

            <div className="passwordRegister">
            <h3>Senha:</h3>
            <input type="password" name="passwordRegister" id="passwordRegister"/>
            </div>

            <div className="buttonRegister">
                <button type="submit">Criar Conta</button>
            </div>




        </div>





        </>
    )
}

export default Register