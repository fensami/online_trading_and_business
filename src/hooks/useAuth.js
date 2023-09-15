// import AuthContext from "@/contexts/AuthContext";
// import { useContext } from "react";
//
// const useAuth = () => {
//   const auth = useContext(AuthContext);
//   const isClient = typeof window !== "undefined";
//
//   if (!isClient && !auth) return {};
//
//   if (!auth) {
//     throw new Error(
//       "You must wrap your application with AuthProvider ot use the useAuth"
//     );
//   }
//   return auth;
// };
//
// export default useAuth;

import React from 'react';
import Auth from './path-to-useAuth';

function useAuth() {
    const auth = Auth();

    // Now, you can access authentication-related data from the 'auth' object
    const { user, login, logout } = auth;

    // Rest of your component code here
}

export default useAuth;

