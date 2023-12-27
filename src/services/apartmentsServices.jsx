const baseUrl = `http://ec2-3-121-234-38.eu-central-1.compute.amazonaws.com:8000/apartments`;

export const getAll = async (token) => {

    try {

        const header = `Bearer ${token}`;

        const allApartments = await fetch(baseUrl, {
            headers: {
                'Authorization': header,
            }
        });

        const result = await allApartments.json();

        return result.apartments;

    } catch (error) {

        alert(error);

        return;

    };

};

export const getOne = async (apartmentNumber, token) => {

    const header = `Bearer ${token}`;

    try {
        const apartment = await fetch(`${baseUrl}/${apartmentNumber}`, {
            headers: {
                'Authorization': header,
            }
        });

        const result = await apartment.json();

        return result;

    } catch (error) {

        alert(error);

        return;
    }

};

export const deleteApartment = async (apartmentNumber, token) => {

    const header = `Bearer ${token}`;

    try {

        await fetch(`${baseUrl}/${apartmentNumber}`, {
            method: 'DELETE',
            headers: {
                'Authorization': header,
            }
        });

    } catch (error) {

        alert(error);

        return;
    }

};

export const create = async (data, token) => {

    const header = `Bearer ${token}`;

    const result = await fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': header,
        },
        body: JSON.stringify(data)
    });

    if (!result.ok) {

        throw ('invalid input');

    };

    alert(`Apartment ${data.number} has been successfully created`);

};