import './Header.scss';

import logo from "../../assets/argentBankLogo.png";

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData, selectUserSession } from '../../store/selectors';

import { logOut } from "../../store/userSessionSlice";
import { removeUserData } from '../../store/userDataSlice';

function Header(){
    // Selectors
    const userSession = useSelector(selectUserSession);  
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
        <nav className='header'>
            <Link to='/' className='header__logo' >
                <img className='header__logo-image' src={logo} alt='Argent Bank Logo'/>
                <h1 className='sr-only'>Argent Bank</h1>
            </Link>
            <div className='header__nav'>
                {userSession.isLoggedIn ? (
                    <>
                        <NavLink to='/user' className='header__nav-item'>
                            <i className='fa fa-user-circle'></i>
                            {userData.userName}
                        </NavLink>
                        <NavLink to='/' className='header__nav-item' onClick={handleLogOut}>
                            <i className='fa fa-sign-out'></i>
                            <p>Log out</p>
                        </NavLink>
                    </>
                ) : (
                    <NavLink to='/log-in' className="header__nav-item">
                        <i className="fa fa-user-circle"></i>
                        <p>Log in</p>
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Header;