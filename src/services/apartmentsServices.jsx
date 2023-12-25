const baseUrl = `http://ec2-3-121-234-38.eu-central-1.compute.amazonaws.com:8000/apartments`;

export const getAll = async () => {

    try {

        const allApartments = await fetch(baseUrl);

        const result = await allApartments.json();

        return result.apartments;

    } catch (error) {

        alert(error);

        return;

    };

};

export const getOne = async (apartmentNumber) => {

    try {
        const apartment = await fetch(`${baseUrl}/${apartmentNumber}`);

        const result = await apartment.json();

        return result;

    } catch (error) {

        alert(error);

        return;
    }

};

export const deleteApartment = async (apartmentNumber) => {

    try {

        await fetch(`${baseUrl}/${apartmentNumber}`, {
            method: 'DELETE',
        });

    } catch (error) {

        alert(error);

        return;
    }

};

export const create = async (data) => {
  
        const result = await fetch(baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!result.ok) {

            throw ('invalid input');

        };

        alert(`Apartment ${data.number} has been successfully created`);

};