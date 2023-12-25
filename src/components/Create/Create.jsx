import { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "../Create/Create.module.css";
import * as apartmentsServices from "../../services/apartmentsServices";

export const Create = () => {
    const [createApartValue, setCreateApartValue] = useState({
        family_name: '',
        floor: '',
        size: '',
        number: '',
        habitants: ''
    });

    const navigate = useNavigate();

    const createInfo = (e) => {

        setCreateApartValue(({ ...createApartValue, [e.target.name]: e.target.value }));

    };

    const newApartmentInfo = async (e) => {

        e.preventDefault();

        try {

            await apartmentsServices.create(createApartValue);

            navigate('/');

        } catch (error) {

            alert(error);

            return;
            
        }

    }

    return (
        <div className={style.createContainer}>
            <form onSubmit={newApartmentInfo}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Family Name</label>
                    <input type="text" className="form-control" name="family_name" value={createApartValue.family_name} onChange={createInfo} autoComplete="true" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Floor</label>
                    <input type="number" className="form-control" name="floor" value={createApartValue.floor} onChange={createInfo} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Apartment size in m2</label>
                    <input type="number" className="form-control" name="size" value={createApartValue.size} onChange={createInfo} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Apartment Number</label>
                    <input type="number" className="form-control" name="number" value={createApartValue.number} onChange={createInfo} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Habitants</label>
                    <input type="number" className="form-control" name="habitants" value={createApartValue.habitants} onChange={createInfo} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}