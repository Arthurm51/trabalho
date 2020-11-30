import React, {useState, useLayoutEffect} from 'react'
import '../assets/login.css'
import { Link } from 'react-router-dom'
import Firebase from '../services/FirebaseConnect'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")
  const [rememberme, setRememberme] = useState(false)

useLayoutEffect(()=> {
  let emailStorage = localStorage.getItem("email")
  let passwordStorage = localStorage.getItem("password")
  if (emailStorage && passwordStorage){
    setEmail(emailStorage)
    setPassword(passwordStorage)
    
  }
  
}, [])


  const login = () => {

    Firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(retorno => {
        console.log(retorno.user.uid)
        sessionStorage.setItem("uuid", retorno.user.uid)
        if (rememberme===true){
          localStorage.setItem("email", email)
          localStorage.setItem("password", password)
        }else{
          localStorage.removeItem("email")
          localStorage.removeItem("password")
        }
        setMsg("Usuário logado!")
      })
      .catch((erro) => {
      console.log(erro)
      setMsg("Usuário ou senha inválidos")})
    }

    return (
      <>
        
        <div className="pagLogin">


          <div className="email">
            
            <h3>E-mail:</h3>
            <input type="email" name="emailLogin" id="emailLogin" value={email} onChange={(e)=> setEmail(e.target.value)}/>
              
          </div>

          <div className="password">
            <h3>Senha:</h3>
            <input type="password" name="passwordLogin" id="passwordLogin" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>

          <div className="buttonLogin">
            <button type="submit" onClick={login}>Login</button>
            {msg}
          </div>

          <div className="remember">
            <input type="checkbox" name="rememberLogin" id="rememberLogin"/>
            <h3>Lembre-me</h3>
            {onchange=()=> setRememberme(!rememberme)}
          </div>

          <div className="register">
            <h3>Não possui uma conta?</h3>
            <h3>Clique <Link to="/registre-se" style={{ textDecoration: 'none', color: 'orangered'}}>aqui</Link>!</h3>


          </div>

        </div>
          
          
        
      </>
    );
  }
  export default Login;