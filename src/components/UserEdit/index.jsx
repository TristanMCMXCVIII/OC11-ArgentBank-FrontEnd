import axios from "axios";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './UserEdit.scss';

import { selectUserData } from "../../store/selectors";

import { editUserName } from "../../store/userDataSlice.js";
import { toggleEdit } from "../../store/editUserSlice.js";


export default function UserEdit(){

    const [userName, setUserName] = useState('');
    const [editSuccess, setEditSuccess] = useState(false);
    const [editError, setEditError] = useState(false);

    const dispatch = useDispatch();

    const userData = useSelector(selectUserData)
    const firstName = userData.firstName;
    const lastName = userData.lastName;

    const token = localStorage.getItem('token');

    // function editUsername()
    const editUserNameFt = async () => {
        try {
            const response = await axios.put(
                'http://localhost:3001/api/v1/user/profile',
                {
                    userName: userName,
                },
                {
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const editData = await response.data;
            dispatch(editUserName(editData.body.userName));

            if (response.status === 200) {
                setEditSuccess(true);
            }
        }
        catch (error) {
            if (error.response) {
                console.error("Server responded with status:", error.response.status);
                console.error("Error message:", error.response.data.message);
            } 
            else if (error.request) {
                console.error("No response received from the server.");
            } 
            else {
                console.error("Error:", error.message);
            }
        }
    }

    // function handleSubmit()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const check = /^[0-9A-Za-z\s-]+$/;

        setEditSuccess(false);
        if (check.test(userName)) {
            editUserNameFt();
            setUserName('');
        }
        else {
            setEditError(true);
        }
    }

    // function handleClick()
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch(toggleEdit());
        setUserName("");
    };
    
    // function handleClick()
    const editSuccessMessage = () => {
        if (editSuccess) {
            return (
                <p className="successmessage">
                    Modification du nom d'utilisateur réussie!
                </p>
            );
        }
    };

    // function editErrorMessage()
    const editErrorMessage = () => {
        if (!editSuccess) {
            return (
                <p className="errormessage">
                    Votre nom d'utilisateur ne peut pas contenir de caractères spéciaux,
                    veuillez rééssayer
                </p>
            );
        }
    };

    // return
    return(
        <div className="editform--container">
            {editSuccess === true ? editSuccessMessage() : null}
            {editError === true ? editErrorMessage() : null}

            <form type="submit" onSubmit={handleSubmit} className="form">
                <div className="editform--input-wrapper">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div className="editform--input-wrapper">
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" id="firstName" value={firstName} disabled />
                </div>
                <div className="editform--input-wrapper">
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" id="lastName" value={lastName} disabled />
                </div>
                <div className="buttonwrapper">
                    <button className="edit-button" type="submit">Save</button>
                    <button className="edit-button" onClick={handleClick}>Cancel</button>
                </div>
            </form>
        </div>
    );
};