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
        throw ('error');
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

    if(!userInfo.ok) {
        throw ('invalid token');
    }

    const result = await userInfo.json();

    return result;

}