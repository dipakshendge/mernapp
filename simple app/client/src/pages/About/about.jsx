import {Link} from "react-router-dom";
import { useAuth } from "../../store/auth";
import { Analytics } from "../../components/Analytics/analytics";

export const About = () => {

const {user} = useAuth();
const name = user.username
console.log(name);
    return (
        <>
            <section>
                <main>
                    <div className="container">
                        <div className="grid grid-two-cols">
                            <div className="text-container">
                                <p>Welcome {name} ... </p>
                                <h1>Why Choose Us? </h1>
                                <p>
                                    Expertise: Our team consists of experienced IT professionals who
                                    are passionate about staying up-to-date with the latest industry
                                    trends.
                                </p>
                                <p>
                                    Customization: We understand that every business is unique.
                                    Thats why we create solutions that are tailored to your specific
                                    needs and goals.
                                </p>
                                <p>
                                    Customer-Centric Approach: We prioritize your satisfaction and
                                    provide top-notch support to address your IT concerns.
                                </p>
                                <p>
                                    Affordability: We offer competitive pricing without compromising
                                    on the quality of our services.
                                </p>
                                <p>
                                    Reliability: Count on us to be there when you need us. We're
                                    committed to ensuring your IT environment is reliable and
                                    available 24/7.
                                </p>
                            </div>
                            <div className="img-comtainer">
                                <img src="/images/about.png" alt="about image" width="400" height="300"/>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <Analytics />
        </>
    )
}