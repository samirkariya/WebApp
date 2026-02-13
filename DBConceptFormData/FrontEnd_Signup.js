import { useState } from "react"

export default function Signup(){
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await fetch("http://localhost:5000/adduser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)            
        })
        
        alert("User has been added!");
    }

    return(
    <div>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="User Name" onChange={handleChange}/>
            <br/><br/>
            <input type="email" name="email" placeholder="User Email" onChange={handleChange}/>
            <br/><br/>
            <input type="password" name="password" placeholder="User Password" onChange={handleChange}/>
            <br/><br/>
            <button type="submit">Signup</button>
        </form>
    </div>
    )
}