import {Link} from "react-router-dom"

export const Error = () => {
    return(
        <>
            <section>
                <div className="container">
                    <div className="box">
                        <h1>404</h1>
                        <p>Page Not Found...</p>
                        <Link to="/">Home Page</Link>
                        <Link to="/contact">Report Problem</Link>
                    </div>
                </div>
            </section>
        </>
    )
}