import React, { useState } from 'react'

function Main() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    function register(event){
        event.preventDefault()
        var users=JSON.parse(localStorage.getItem('users') || "[]")
        var newUser = {
            name:name,
            email:email,
            password:password
        }
        users.push(newUser);
        localStorage.setItem('users',JSON.stringify(users))
        setEmail("")
        setName("")
        setPassword("")
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <img src="" alt="" />
                </div>
                <div className="col-md-3">
                    <h1>Register</h1>
                    <form onSubmit={register}>
                        <input type="text" placeholder="Full Name" className="form-control" 
                            value={name} onChange={(e)=>{setName(e.target.value)}}
                        />
                        <input type="email" placeholder="Email" className="form-control" 
                            value={email} onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <input type="password" placeholder="Password" className="form-control" 
                            value={password} onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <button type="submit" className="btn btn-primary" >Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main
