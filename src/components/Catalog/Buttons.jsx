
import { Link } from "react-router-dom";

export const Buttons = ({
    apartNumber,
    deleteApartmentHandler
}) => {
    return (
        <>
            <div className="btn-group me-2" role="group" aria-label="First group">
                <Link to={`/details/${apartNumber}`} className="btn btn-primary">
                    Details
                </Link>

            </div>
            <div className="btn-group me-2" role="group" aria-label="First group">
                <button className="btn btn-danger" onClick={() => deleteApartmentHandler(apartNumber)}>
                    Delete
                </button>
            </div>
        </>
    )
}