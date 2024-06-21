import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCreationForm(){
    let [uname, setUname] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [pass1, setPass1] = useState('');
    let [pass2, setPass2] = useState('');
    let [email, setEmail] = useState('');
    let [staff, setStaff] = useState(false);
    let navigateitem = useNavigate();

    let handleSubmit = () => {
        if (pass1 !== pass2 && staff !== true) {
            alert('password is not valid')

        }else{
        let userData = {
            user_name:uname,
            first_name: firstName,
            last_name: lastName,
            password:pass1,
            email,
            is_staff: staff,
        };
        let register_url = 'http://127.0.0.1:8000/api/register/';
        axios.post(register_url,{"data":userData}).then((resp) => {
            if (resp.status === 201){
            navigateitem('/Login');}
        }).catch((error) => {
            console.error("Error:", error);
        })
        .finally=()=>{
            navigateitem('/Login');
        };
    };
};

    return (
        <div>
       <div className='signup'>
            <label>Username </label> <input type="text" value={uname} placeholder='Enter Username' required onChange={(e) => setUname(e.target.value)}/><br/><br/>
            <label>First Name </label> <input type="text" value={firstName} placeholder='Enter Your First Name' required onChange={(e) => setFirstName(e.target.value)}/><br/><br/>
            <label>Last Name </label> <input type="text" value={lastName} placeholder='Enter Your Last Name' required onChange={(e) => setLastName(e.target.value)}/><br/><br/>
            <label>Password </label> <input type="Password" value={pass1} placeholder='Enter Password' required onChange={(e) => setPass1(e.target.value)}/><br/><br/>
            <label>Confirm Password </label> <input type="Password" value={pass2} placeholder='Enter Conform Password' required onChange={(e) => setPass2(e.target.value)}/><br/><br/>
            <label>Email </label> <input type="email" value={email} placeholder='Enter Your Email' required onChange={(e) => setEmail(e.target.value)} /><br/><br/>
            <label>Is Staff </label> <input type="checkbox" checked={staff} required onChange={(e) => setStaff(e.target.checked)}/><br/><br/>
            <button onClick={handleSubmit}>Create User</button>
        </div>

        </div>
    );
}
export default UserCreationForm;