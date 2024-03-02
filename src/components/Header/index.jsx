import './Header.scss';

import logo from "../../assets/argentBankLogo.png";

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectLogIn, selectUserData } from '../../store/selectors';

import { logOut } from "../../store/userSlice";
import { removeUserData } from '../../store/userDataSlice';

function Header(){
    // Selectors
    const user = useSelector(selectLogIn); //le use selector n'est pas censé 
    const userData = useSelector(selectUserData);

    // Hooks
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // Click on "logout"
    const handleLogOut = (event) => {
        event.preventDefault();

        dispatch(logOut());
        dispatch(removeUserData());

        navigate('/');

        localStorage.removeItem('IsLoggedIn', 'true');
        localStorage.removeItem('token');
    };

    // Component
    return(
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {!user.isLoggedIn &&
                    <Link className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Log in
                    </Link>
                }
                {user.isLoggedIn &&
                    <>
                        <Link to="/user">
                            <i className="fa fa-user-circle"></i>
                            {userData.userName}
                        </Link>
                        <Link to="/" className="main-nav-item" onClick={handleLogOut}>
                            <i className="fa fa-sign-out"></i>
                            Log out
                        </Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;