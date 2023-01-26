import React, { useMemo } from 'react';
import Context from './Context';
import ContextProducts from './ContextProducts';
import ContextUser from './ContextUser';

function ContextProvider({ children }) {
  const dataProducts = ContextProducts();
  const userInfos = ContextUser();

  const context = useMemo(() => ({
    ...dataProducts,
    ...userInfos,
  }), [dataProducts.globalProducts.length, userInfos.userInfos.cartIds.length]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
