import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch} from 'react-redux';

import "./LogInForm.scss";
import { thunkLoginUser } from "../../api/logInApi";

function LogInForm(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //{loading} = utilise la déstructuralisation pour EXTRAIRE la propriété loading de state.user (state.user.loading)
    const { loading } = useSelector((state) => state.userSession); // use selector ici pour extraire une partie du state globale (user) //use selector -> destructure la session pour ne prendre que le loading

    const handleLoginEvent = async (e) => {
        e.preventDefault();
        
        let userCredentials = {
            email,
            password,
        };
    
        try {
            const result = await dispatch(thunkLoginUser(userCredentials)); // on dispatch une action ({ACTION, PAYLOAD}) ou un thunk(payload) = action asynchrone
        
            console.log('TRISTAN 1-', result);
            if (result.meta.requestStatus === "fulfilled") {
                setEmail("");
                setPassword("");
                navigate("/user");
            }
        } 
        catch (error) {
            console.error(error);
        }
    };

    return(
        <form onSubmit={handleLoginEvent}>
            <div className="input-wrapper">
                <label for="username">Username</label>
                <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-wrapper">
                <label for="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
            </div>
            {/*
                <a href="./user.html" className="sign-in-button">Link</a>
            */}   
            <button className="sign-in-button">{loading ? "Loading..." : "Login"}</button>      
        </form>
    );
};

export default LogInForm;