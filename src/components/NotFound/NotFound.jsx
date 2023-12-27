import { Link } from "react-router-dom"


export const NotFound = () => {
    return (
        <>

            <div className="card text-center position-absolute top-50 start-50 translate-middle w-75 p-3 h-75 d-inline-block ">
                <div className="card-header ">
                    Code: 404
                </div>
                <div className="card-body h-75 d-inline-block">
                    <h5 className="card-title">Page not Found!</h5>
                    <p className="card-text"></p>
                    <Link to="/" className="btn btn-primary">To Log in</Link>
                </div>

            </div>

        </>
    )
}