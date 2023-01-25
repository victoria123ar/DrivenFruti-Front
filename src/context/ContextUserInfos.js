import { useState } from 'react';

function ContextUserInfos() {
  const initialUserInfos = {
    password: '',
    email: '',
    name: '',
    cartIds: [],
  };
  const [userInfos, setUserInfos] = useState(initialUserInfos);

  const contextUserInfosObject = {
    userInfos,
    setUserInfos,
  };

  return contextUserInfosObject;
}

export default ContextUserInfos;
