import { useState, useEffect } from "react"
import { useContext } from "react";

import { UserContext } from "../Context/userContext";
import * as apartmentServices from "../../services/apartmentsServices";
import { Buttons } from "./Buttons";

export const Catalog = () => {

    const { user } = useContext(UserContext);

    const [allApart, setApart] = useState([]);

    useEffect(() => {
        apartmentServices.getAll(user)
            .then(result => setApart(result))
    }, []);

    const deleteApartmentHandler = async (apartNumber) => {

        await apartmentServices.deleteApartment(apartNumber);

        const newApartmentArray = allApart.filter(x => x.number !== apartNumber);

        setApart(newApartmentArray);

    }

    return (
        <>

            <div className="container overflow-hidden text-center">
                <div className="row gy-5">
                    {allApart.length > 0 ?
                        <>
                            {
                                allApart.map(x => {
                                    return (
                                        <div className="col-6 " key={x.id}>
                                            <div className="p-3" >
                                                <div className="card">
                                                    <img src="https://media.self.com/photos/630635c30b7f36ce816f374a/2:1/w_1280,c_limit/DAB03919-10470989.jpg" className="card-img-top" alt="..." />

                                                    <div className="card-body">
                                                        <h5 className="card-title">Family Name: {x.family_name}</h5>
                                                        <p className="card-text">Apartment Number: {x.number}</p>
                                                        {/* <a onClick={modalHandler} className="btn btn-primary">Details</a> */}

                                                        {user && <Buttons apartNumber={x.number} deleteApartmentHandler={deleteApartmentHandler} />}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </>
                        :
                        <div className="alert alert-warning" role="alert">
                            No apartments!
                        </div>

                    }

                </div>
            </div>

        </>
    )

} 