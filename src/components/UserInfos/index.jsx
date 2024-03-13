import { useDispatch, useSelector } from 'react-redux';

import './UserInfos.scss';

import { selectUserData } from '../../store/selectors';
import { useEffect, useState } from 'react';
import { fetchUserData } from '../../api/userDataApi';
import { saveUserData } from '../../store/userDataSlice';

import UserEdit from '../UserEdit';


function UserInfos() {

    const userData = useSelector(selectUserData);

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const savedToken = localStorage.getItem('token');

    useEffect(() => {
        if (savedToken) {
            const getData = async () => {
                fetchUserData(savedToken).then((response) => dispatch(saveUserData(response.data.body)));
            };
            getData(); 
        }
    }, [dispatch, savedToken]);

    return(
        <div className='user-infos'>
            { isOpen ? (
                <h1>Edit user info</h1>
            ) : (
                <h1>Welcome back<br />{`${userData.firstName} ${userData.lastName}`}</h1>
            )}

            { isOpen ? (
                <UserEdit closeFunction={() => setIsOpen(false)} />
            ) : (
                <button className='edit-button' onClick={() => setIsOpen(true)}>Edit name</button>
            )}
        </div>
    );
};

export default UserInfos;