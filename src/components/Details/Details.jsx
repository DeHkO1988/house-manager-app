import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import style from "../Details/Details.module.css";
import * as apartmentServices from "../../services/apartmentsServices";
import { UserContext } from "../Context/userContext"

export const Details = () => {
    const [apartment, setApartment] = useState({})

    const { apartmentNumber } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        apartmentServices.getOne(apartmentNumber, user)
            .then(result => setApartment(result))
    }, [apartmentNumber]);

    return (
        <>

            <div className={style.detailPanel}>
                <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Family name: {apartment.family_name}</h5>
                        </div>
                        <img src="https://media.self.com/photos/630635c30b7f36ce816f374a/2:1/w_1280,c_limit/DAB03919-10470989.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Floor: {apartment.floor}</p>
                            <p className="card-text">Number: {apartment.number}</p>
                            <p className="card-text">Size: {Number(apartment.size).toFixed(3)} m2.</p>
                            <p className="card-text">Habitants: {apartment.habitants}</p>
                            <p className="card-text">Tax: {Number(apartment.tax).toFixed(2)} lv.</p>
                        </div>

                        <div className={style.buttonPosition}>
                            <p className="d-inline-flex gap-1">
                                <Link to={`/edit/${apartmentNumber}`} className="btn btn-primary" role="button" data-bs-toggle="button">Edit</Link>
                                <Link to={'/catalog'} className="btn btn-primary" >Back</Link>
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}