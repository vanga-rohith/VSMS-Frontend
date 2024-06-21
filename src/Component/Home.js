import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Login from "../Component1/Login";
import UserCreationForm from "../Component1/UserCreationForm";
import ForgotPassword from "../Component1/ForgotPassword";
import StudentLogin from "../Component1/StudentLogin";
import Body from "../Component2/Body";
import NavBar from "./NavBar";
import Logout from "../Component1/Logout";
import { createContext, useState } from "react";

export let logincontext = createContext();

function Home(){
    let [isAutenticated,setIsAutenticated] = useState(false);
    let [token,setToken] = useState('');
    return (<logincontext.Provider value={[[isAutenticated,setIsAutenticated],[token,setToken]]}> 
        <div>
        <div>
        <h1>VCUBE STUDENT MANAGEMENT SYSTEM</h1>
        </div>

        <div>
            <NavBar />
            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<UserCreationForm />} /> 
                <Route path="/Body" element={<Body/>}/>     
                <Route path='/Forgot' element={<ForgotPassword />}/> 
                <Route path='/Student' element={<StudentLogin/>}/>
                <Route path='/Logout' element={<Logout />}/>             
            </Routes>

        </div>
        </div></logincontext.Provider>
);
}
export default Home;