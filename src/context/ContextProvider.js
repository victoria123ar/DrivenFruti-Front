import React, { useMemo } from 'react';
import Context from './Context';
import ContextUserInfos from './ContextUserInfos';

function ContextProvider({ children }) {
  const data = ContextUserInfos();

  const context = useMemo(() => ({
    ...data,
  }), [data]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
