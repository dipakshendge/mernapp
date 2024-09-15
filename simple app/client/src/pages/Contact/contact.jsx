import { useEffect, useState } from "react"
import "./contact.css"
import { useAuth } from "../../store/auth";
import { toast } from 'react-toastify';

export const Contact = (() => {

    const [contact, setContact] = useState({
        username:"",
        email: "",
        message: ""
    });

    const [contactData, setContactData] = useState(true);
    const {user,isLogedIn} = useAuth();
   
    // console.log("User data from contact jsx",user);

    useEffect(() => {
        // setContactData(true)
            if(user && contactData ){
            // console.log(user);
            // fill automatic data from db in contact form
            setContact({
                username: user.username,
                email:user.email,
                message: "", 
            },[isLogedIn]);

            setContactData(false)     // stop render infinite loop

        }
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setContact({
            ...contact,
            [name]: value
        });
        
    };
    const submitContact = async (e) => {
        e.preventDefault();  // prevent page refreshe after click
        // console.log(contact)
        try {
            let response = await fetch("http://localhost:4000/api/form/contact",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(contact)
            });
            if(response.ok){
                toast.success("Message sent Successfuly");
                setContact({
                    ...contact,
                    message:""
                })
            }else{
                toast.error("error while sending message");
            }
            
        } catch (error) {
            console.log(`Error in sending msg ${error}`);
        }
    }

    return(
        <>
            <h1 className="contact-heading">Reach Out to Us . . .</h1>
            <section>
                <main>
                    <div className="container">
                        <div className="grid grid-two-cols">
                            <div className="image-container">
                                <img src="./images/support.png" alt="support image" width="500" height="400" />
                            </div>
                            <div className="text-container">
                                <form onSubmit={submitContact}>
                                    <label htmlFor="username">UserName :</label>
                                    <input type="text" onChange={handleInput} required autoComplete="off" value={contact.username} placeholder="Enter Your Username . . ." name="username" id="username"/>
                                    <label htmlFor="email">Email :</label>
                                    <input  type="email" onChange={handleInput} required autoComplete="off" value={contact.email} placeholder="Enter Your Email . . ." id="email" name="email"/>
                                    <label htmlFor="message">Message :</label>
                                    <textarea name="message" onChange={handleInput} required autoComplete="off" value={contact.message} id="message" cols="30" rows="10" placeholder="Enter Youre Query . . ."></textarea>
                                    <button className="btn btn-primary" type="submit" >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5529694566644!2d73.81816317423697!3d18.503897369685152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf952d9175e1%3A0x4f7c79d10fc5378a!2sKarve%20Rd%2C%20Kamalesh%20Society%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1710946936268!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
});