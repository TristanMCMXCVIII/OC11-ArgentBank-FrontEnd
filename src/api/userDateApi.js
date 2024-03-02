import axios from 'axios';

export const fetchUserInfos = async (isLogin) => {
    try {
        const response = await axios.post(
            'http://localhost:3001/api/v1/user/profile', 
            {},
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${isLogin}`
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