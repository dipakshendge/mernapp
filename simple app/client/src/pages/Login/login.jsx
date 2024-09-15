    import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from 'react-toastify';


export const Login = () => {
     const [user, setUser] = useState({
            email: "",
            password: ""
        });

const navigate = useNavigate()
const {saveTokenInLS} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    };

// sending data to backend

    const formSubmit =async (e) => {
        e.preventDefault();   // prevent page refreshe after click
        try {
                const response = await fetch(`http://localhost:4000/api/auth/login`,{
                    method: "POST",
                    headers:{
                    "Content-Type":"application/json"
                    },
                    body:JSON.stringify(user)
                    
                });
                //  console.log(response);
                    let data =await response.json();
                    // console.log(data);
                if(response.ok){
                    
                    // console.log("response from server",data);
                    setUser({email:"", password:""});  //clear input values
                    toast.success("Login Successful");
                    // console.log(data.token);
                    saveTokenInLS(data.token)
                    // localStorage.setItem("token", data.token);
                    
                    navigate("/")   //navigate to home page
                }else{
                    toast.warning(data.extraDetails ? data.extraDetails : data.message);
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
                                <img src="/images/login.png" alt="Login image" width="400" height="300"/>
                            </div>
                            <div className="text-container">
                                <h1 className="main-heading">Login Form</h1>
                            <form onSubmit={formSubmit}>
                                <label htmlFor="email">Email:</label>
                                <input onChange={handleInput} autoComplete="off" type="email" id="email" name="email" value={user.email} placeholder="Enter UserName" required />
                                
                                <label htmlFor="password">Password:</label>
                                <input onChange={handleInput} autoComplete="off" type="password" id="password" name="password"  value={user.password} placeholder="Enter Password" required />
                                
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}