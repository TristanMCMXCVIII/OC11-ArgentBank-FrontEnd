import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const checkLoggedInStatus = () => {
    return localStorage.getItem('IsLoggedIn') === 'true';
}

export const loginUser = createAsyncThunk('user.loginUser', async (userCredentials, {rejectWithValue}) => {
    try {
        const request = await axios.post(
            "http://localhost:3001/api/v1/user/login",
            userCredentials 
        );
        console.log("axios answer : request = ", request)

        const token = request.data.body.token;
        const response = request.data.data;

        localStorage.setItem('IsLoggedIn', true);
        localStorage.setItem('token', token)

        return response;
    }
    catch (error) {
        console.log('axios error : error = ', error);

        if (error.response){
            if (error.response.status === 400) {
                alert('One of your credentials might be wrong, please try again');
                return rejectWithValue('Invalid credentials');
            }
            else {
                return rejectWithValue('There seems to be a problem. Please try again');
            }
        }
        else if (error.request) {
            return rejectWithValue('No response recieve from the server.');
        }
        else {
            return rejectWithValue("Network error. Please check your internet connection.");
        }
    }
});