import axios from "axios";
import {   useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logincontext } from "../Component/Home";


function Login(){

    let [uname, setUname] = useState('');
    let [pwd, setPwd] = useState('');
    let navigateitem = useNavigate();
    let [[isAutenticated,setIsAutenticated],[token,setToken]] = useContext(logincontext);

    

    let loginHandler = () => {
        let loginUrl = "http://127.0.0.1:8000/api/Login/";
        let credentials = {
            username: uname,
            password: pwd,
        };

        axios.post(loginUrl, credentials)
            .then((resp) => {
                if (resp.status === 200){
                    setIsAutenticated(true);
                    setToken(resp.data['token']);
                    navigateitem('/Body');
            }
            if (resp.status === 400){
                setIsAutenticated(false);
            }
            })
            .catch((error) => {
                setIsAutenticated(false);
                console.error("Error:", error);
            });
    };

    return (

        <div>
            <div className="login">
            <button onClick={()=>{(navigateitem('/Login'))}}>Admin</button><button onClick={()=>{navigateitem('/Student')}}>Student</button><br/><br/>
            <label>Username </label> 
            <input type="text" placeholder="Enter Your Username" onChange={(e) => setUname(e.target.value)} />
            
            <br /><br />
            <label>Password </label>
            <input type="password" placeholder="Password" onChange={(e) => setPwd(e.target.value)} />

            <br /><br />
            <button onClick={loginHandler}>Login</button>
            <br /><br/>
            <Link to='/SignUp' >SignUp</Link><br/><br/>
            <Link to='/Forgot'>Forgot Password?</Link>
            <br/><br/>
        </div>
        </div>
               
    );
}
export default Login;