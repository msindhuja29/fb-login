import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
function Navbar() {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const histroy = useHistory()
    function login(event){
        event.preventDefault()
        let users = JSON.parse(localStorage.getItem("users"))
        let flag=0
        for (let user of users){
            if(user.email === email && user.password === password ){
                flag += 1;
                break;
            }
        }
        setEmail("");
        setPassword("");
        if(flag === 1){
            localStorage.setItem("loggedin",'loggedin')
            histroy.push("/home")
            window.location.reload(true);
            // alert("Login Sucessfull ");
        } else {
            alert("Login Failed ");
        }
    }
    function logout(){
        localStorage.removeItem("loggedin");
    }
    return (
        <div id="navbar">
            <div className="row">
                <div className="col-md-6">
                    <h3>Facebook</h3>  
                </div>
                <div className="col-md-6">

                    {
                        (()=>{
                            if(localStorage.getItem("loggedin")){
                                return(
                                    <button className="btn btn-primary" onClick={logout}>LogOut</button>
                                )
                            }
                            else {
                                return (
                                    <div>
                                        <input type="email" placeholder="Email" 
                                            value={email} onChange={(e) => {setEmail(e.target.value)}}
                                        />
                                        <input type="password" placeholder="Password" 
                                            value={password} onChange={(e) => {setPassword(e.target.value)}}
                                        />
                                        <button type="submit" className="btn btn-success" onClick={login}>Login</button>
                                    </div>
                                )
                            }
                        })()
                    }




                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
