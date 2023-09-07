import { BrowserRouter,NavLink,Route,Routes } from "react-router-dom"
import Home from "./Home"
import Student from "./Student"
import Contactus from "./Contactus"
import User from "./user"
import './sty.css'

function Routecompo(){

    return(
        <div>
    <BrowserRouter>
    <div className="one">

    <NavLink  style={({isActive})=>({color:isActive ? "green" : "white"})} to='/'className="two">Home</NavLink>
    <NavLink style={({isActive})=>({color:isActive ? "green" : "white"})} to='/Student' className="two">Students</NavLink>
    <NavLink style={({isActive})=>({color:isActive ? "green" : "white"})} to='/Contactus' className="two">Contactus</NavLink>
    </div>
    <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/Student' element={ <Student /> }/>
        <Route path='/Contactus' element={ <Contactus />}/>
        <Route path='/User/:id' element={<User/> }/>
    </Routes>
    </BrowserRouter>
        </div>
    )
}
export default Routecompo