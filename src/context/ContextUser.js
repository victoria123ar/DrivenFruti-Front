import { useContext, useState } from 'react';
import Context from './Context';

function ContextUser() {
  const initialUserInfos = {
    name: '',
    password: '',
    email: '',
    cartIds: [],
  };

  const [userInfos, setUserInfos] = useState(initialUserInfos);
  const [total, setTotal] = useState(0);

  const contextUserObject = {
    userInfos,
    setUserInfos,
    total,
    setTotal,
  };

  return contextUserObject;
}

export default ContextUser;
