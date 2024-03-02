import { useDispatch, useSelector } from 'react-redux';

import './UserInfos.scss';

import { selectEditUser, selectUserData } from '../../store/selectors';
import { useEffect } from 'react';
import { fetchUserInfos } from '../../api/userDateApi';
import { saveUserData } from '../../store/userDataSlice';
import { toggleEdit } from '../../store/editUserSlice';

import UserEdit from '../UserEdit';


function UserInfos() {

    const userData = useSelector(selectUserData);
    const editData = useSelector(selectEditUser);

    const dispatch = useDispatch();

    const isLogin = localStorage.getItem('token');

    useEffect(() => {
        if (isLogin) {
            const getData = async () => {
                fetchUserInfos(isLogin).then((response) => dispatch(saveUserData(response.data.body)));
            };
            getData();
        }
    }, [dispatch, isLogin]);

    return(
        <div className='userInfos'>
            {editData.open === true ? (
                <h1>Edit user info</h1>
            ) : (
                <h1>Welcome back<br />{`${userData.firstName} ${userData.lastName}`}</h1>
            )}

            {editData.open === true ? (
                null
            ) : (
                <button className='edit-button' onClick={() => dispatch(toggleEdit())}>Edit name</button>
            )}

            {editData.open === true ? (
                <UserEdit/>
            ) : (
                null
            )}
        </div>
    );
};

export default UserInfos;