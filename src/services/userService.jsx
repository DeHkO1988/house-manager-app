const baseUrl = `http://ec2-3-121-234-38.eu-central-1.compute.amazonaws.com:8000/users/token`;

export const logIn = async (data) => {

    const formData = new FormData();

    formData.append('username', data.username);
    formData.append('password', data.password);

    const token = await fetch(baseUrl, {
        method: 'POST',
        body: formData,
    });

    const result = await token.json()

    if (!token.ok) {
        throw ("Incorrect username or password");
    }

    return result.access_token;
}

export const getUserInfo = async (token) => {

    const header = `Bearer ${token}`;

    const userInfo = await fetch(`http://ec2-3-121-234-38.eu-central-1.compute.amazonaws.com:8000/users/me`, {
        headers: {
            'Authorization': header,
        }
    });

    if (!userInfo.ok) {
        throw ('invalid token');
    }

    const result = await userInfo.json();

    return result;

};

export const getAllUsers = async (token) => {

    const header = `Bearer ${token}`;

    const users = await fetch(`http://ec2-3-121-234-38.eu-central-1.compute.amazonaws.com:8000/users`, {
        headers: {
            'Authorization': header,
        }
    });

    const result = await users.json();

    return result;
};

export const createUser = async (token, data) => {

    const header = `Bearer ${token}`;

    const newUser = await fetch(`http://ec2-3-121-234-38.eu-central-1.compute.amazonaws.com:8000/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': header,
        },
        body: JSON.stringify(data),
    });

    if (!newUser.ok) {
        throw ("error")
    };

    alert("new user is created");

};

export const getOneUser = async (id, token) => {

    const header = `Bearer ${token}`;

    const userInfo = await fetch(`http://ec2-3-121-234-38.eu-central-1.compute.amazonaws.com:8000/users/${id}`, {
        headers: {
            'Authorization': header,
        }
    });

    if(!userInfo.ok) {
        throw("error get userInfo")
    };

    const result = await userInfo.json();

    return result

};

export const editUser = async (token, data, id) => {

    const header = `Bearer ${token}`;

    const edit = await fetch(`http://ec2-3-121-234-38.eu-central-1.compute.amazonaws.com:8000/users/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': header,
        },
        body: JSON.stringify(data),
    });

    if(!edit.ok) {
        throw("edit don't work");
    }

    alert("edit was successful");
}