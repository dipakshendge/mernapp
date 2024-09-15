import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from 'react-toastify';

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

const navigate= useNavigate();
const {saveTokenInLS} = useAuth()

// handlle input
const handleInput = (e) => {
 let name = e.target.name;
 let value = e.target.value;

 setUser({
    ...user,
    [name]: value
 });

}
// form submit (sending data to backend)
const formSubmit =async (e) => {
    e.preventDefault();   // prevent page refreshe after click
    // console.log(user)
    try {
        const response = await fetch(`http://localhost:4000/api/auth/register`,{
        method: "POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(user) // convert object data into JSON
        
    });
    //  console.log(response)
            let data =await response.json()
        if(response.ok){
           
            console.log(data.token)
            
            saveTokenInLS(data.token); // save token in local storage
            setUser({username: "", email: "", phone: "", password: ""}) // clear input values
            toast.success("Registration Successful");
             navigate("/");   // navigate to login page
            
            
           
        }else{
            toast.error(data.extraDetails ? data.extraDetails : data.message )
            // console.log(data);
        }
       
    } catch (error) {
        console.log("Register" , error);
    }
} 
    return (
        <>
            <section>
                <main>
                    <div className="container">
                        <div className="grid grid-two-cols">
                            <div className="img-comtainer">
                                <img src="/images/register.png" alt="home image" width="400" height="300"/>
                            </div>
                            <div className="text-container">
                                <h1 className="main-heading">Registartion Form</h1>
                            <form onSubmit={formSubmit}>
                                <label htmlFor="username">Username:</label>
                                <input onChange={handleInput} autoComplete="off" type="text" id="username" name="username" value={user.username} placeholder="Enter UserName" required />
                                
                                <label htmlFor="email">Email:</label>
                                <input onChange={handleInput} autoComplete="off" type="email" id="email" name="email" value={user.email} placeholder="Enter Email" required />

                                <label htmlFor="phone">Phone:</label>
                                <input onChange={handleInput} autoComplete="off" type="number" id="phone" name="phone" value={user.phone} placeholder="Enter Phone" required />
                                
                                <label htmlFor="password">Password:</label>
                                <input onChange={handleInput} autoComplete="off" type="password" id="password" name="password"  value={user.password} placeholder="Enter Password" required />
                                
                                
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </section>

        </>
    )
}