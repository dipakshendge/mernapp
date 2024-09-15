import { Analytics } from "../../components/Analytics/analytics"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <section>
                <main>
                    <div className="container">
                        <div className="grid grid-two-cols">
                            <div className="text-container">
                                <p>We are the World Best IT Company</p>
                                <h1>Welcome to RS Enterprises</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nemo aut, voluptate laboriosam aperiam eveniet soluta magni sunt dolores maxime.</p>
                                <div className="button">
                                    <button className="btn btn-primary"><Link to="/contact">Contact Now</Link></button>
                                    <button className="btn secondary-btn"><Link to="/services">Learn More</Link></button>
                                </div>
                            </div>
                            <div className="img-comtainer">
                                <img src="/images/home.png" alt="home image" width="400" height="300"/>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <Analytics />

            <section>
                <main>
                    <div className="container">
                        <div className="grid grid-two-cols">
                            <div className="img-comtainer">
                                <img src="/images/home.png" alt="home image" width="400" height="300"/>
                            </div>
                            <div className="text-container">
                                <p>We are here to help you</p>
                                <h1>Get Started Today</h1>
                                <p>Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how RS Enterprises can help your business thrive in the digital age.</p>
                                <div className="button">
                                    <button className="btn secondary-btn"><Link to="/contact">Contact Now</Link></button>
                                    <button className="btn btn-primary"><Link to="/services">Learn More</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}