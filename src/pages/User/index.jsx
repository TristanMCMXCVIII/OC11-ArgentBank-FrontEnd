import "./User.scss";
import "../../utils/main.scss"

import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectUserSession } from "../../store/selectors";

import { Navigate } from "react-router-dom";

import Account from "../../components/Account";

import UserInfos from '../../components/UserInfos';


//gerer logout dans fichier de Routing 

function User(){

    const userSession = useSelector(selectUserSession);
  
    const isConnected = () => {
        if (userSession.isLoggedIn === true) {
            return true;
        }   
    }; 

    useEffect(() => {
        document.title = "Argent Bank - User Page";
    }, []);

    if (!isConnected()) {
        return <Navigate to="/log-in" />;
    }
    

    return(
        <main className="main bg-dark screen-user">
            <UserInfos/>
            <h2 className="sr-only">Accounts</h2>
            <Account 
                title="Argent Bank Checking (x8349)" 
                amount="$2,082.79" 
            />
            <Account 
                title="Argent Bank Savings (x6712)" 
                amount="$10,928.42" 
            />
            <Account 
                title="Argent Bank Credit Card (x8349)" 
                amount="$184.30"  
            />
        </main>
    );
};

export default User;