
import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();



export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const [user, setUser] = useState("");

    const [data, setData] =useState();

    const saveTokenInLS = (servertoken) => {
        setToken(servertoken);
        return localStorage.setItem("token",servertoken);
    }
  
    let isLogedIn = !! token
    const logoutUser = () => {
        setToken("");
        setUser("");
        return localStorage.removeItem('token');
    }

    const userAuthentication = async () => {
    console.log(token);
       if(isLogedIn){
            try {
                const response = await fetch("http://localhost:4000/api/auth/user", {
                method: "GET",
                headers: {Authorization:`Bearer ${token}`}
            })

            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
                console.log("User data from auth jsx",data);
            }
        } catch (error) {
            console.log("error from auth route", error);
        }
        
    }}

    // get service page data
    const serviceData = async() => {
        try {
                const response = await fetch(("http://localhost:4000/api/data/service"),{
                    method: "GET"
                });
                if(response.ok){
                    const data = await response.json();
                    setData(data.response)
                }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        userAuthentication();
        serviceData();
    },[isLogedIn])

    return <AuthContext.Provider value={{saveTokenInLS, logoutUser, isLogedIn, user, data}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
   const authContextValue = useContext(AuthContext);
   if(!authContextValue) {
    throw new Error("useAuth is used outside of Provider")
   }
   return authContextValue;
}