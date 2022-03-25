import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {logoutUser} from '../../../store/actions/auth';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);
  
  return <Redirect to="/" />
};

export default Logout;