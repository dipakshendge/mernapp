import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./services.css";
import { useAuth } from "../../store/auth";

export const Servieces = () => {
    
    const {data} = useAuth();

    // console.log(data);
    
    return (
        <>
            <main>
                    <div className="container">
                        <h1 id="ServiceHeading">Services</h1>
                        <div className="grid grid-three-cols">
                        {
                            Array.isArray(data) && data.map((item, index) => {
                                const { service, provider, price, description,image } = item;
                                return (
                                    <div className="card" key={index}>
                                        <div className="card-img">
                                            <img src={image} alt="Services info" />
                                        </div>
                                        <div className="card-details">
                                            <div className="grid grid-two-cols" id="card-details">
                                                <p className="card-para">{provider}</p>
                                                <p className="card-para">{price}</p>
                                            </div>
                                            <h3>{service}</h3>
                                            <p id="card-text" className="card-para">{description}</p>
                                            <Link to="/contact"><button className="btn btn-primary">Get Details</button></Link>
                                        </div>
                                    </div>
                                );
                            })
                        }
                            
                        </div>
                    </div>
                </main>
           
        </>
    )
}