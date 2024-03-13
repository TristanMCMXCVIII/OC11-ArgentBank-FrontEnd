import axios from 'axios';

export const fetchUserData = async (token) => { // fetchUserInfos -> fetchUserData
    try {
        const response = await axios.post(
            'http://localhost:3001/api/v1/user/profile', 
            {},
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return await response;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}