import React from 'react'
import NavBar from '../main/header/Header.jsx'
import Home from '../home/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from "../main/footer/Footer.jsx"
import RutError from '../home/RutError.jsx'
import RutInformation from '../home/RutInformation.jsx'
import RutHelp from '../home/RutHelp.jsx'
import RutRegister from '../home/RutRegister.jsx'
const Pages = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/vuelos" component={Home}/>
          <Route exact path="/informacion" component={RutInformation}/>
          <Route exact path="/ayuda" component={RutHelp}/>
          <Route excat path="/register" component={RutRegister}/>
          <Route exact path="*" component={RutError}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default Pages