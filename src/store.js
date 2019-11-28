import React from 'react';


const authContext = React.createContext({});
export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;

export default authContext;
