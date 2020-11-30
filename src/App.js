import "./assets/header.css"
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Registrer'
import Menu from './pages/Menu'
import NewTournaments from './pages/NewTournaments'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Firebase from './services/FirebaseConnect'

function App() {
  const PrivateRoute = ({component: Component, ...rest})=> {
    return <Route
      render={(props=>{
        let isAuthenticated = sessionStorage.getItem("uuid")
        if(isAuthenticated){
          return <Component {...props}/>
        }else{
          return <Redirect to={{pathname:"/login"}} />
        }
        

      })}

    />

  }
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registre-se" component={Register} />
        <PrivateRoute path="/menu" component={Menu}/>
        <PrivateRoute path="/newTournaments" component={NewTournaments}/>
        
        </Switch>
        <Footer/>
      </HashRouter>
      {/*<Footer /> 
      >PrivateRoute path= blablabla*/}
    </>
  );
}
export default App;
