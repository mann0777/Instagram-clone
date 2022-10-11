import React, {createContext, useState} from 'react';
export const ContextProvider = createContext();

const Context = (props) => {
    const [model, setModel] = useState(false);
  return (
    <ContextProvider.Provider value={{model}}>
    {props.children}
    </ContextProvider.Provider>

  )
};

export default Context;