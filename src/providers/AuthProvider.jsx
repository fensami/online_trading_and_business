import AuthContext from "@/contexts/AuthContext";
import auth, { googleProvider } from "@/firebase/firebase.auth";
import { getRole } from "@/hooks/getRole";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [role, setRole] = useState(null)
  // console.log(role)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // useEffect(() => {
  //   if (user) {
  //     const fetchUserRole = async () => {
  //       try {
  //         const userRoleData = await getRole(user.email);

  //         if (userRoleData && userRoleData.length > 0) {
  //           const userRole = userRoleData[0].role;
  //           setRole(userRole);
  //         } else {
  //           setRole(null);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user role:", error);
  //       }
  //     };

  //     fetchUserRole();
  //   }
  // }, [user]);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = async (updateUser = {}) => {
    setLoading(true);
    await updateProfile(auth.currentUser, updateUser);
    setUser((preUser) => ({ ...preUser, ...updateUser }));
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading,
    createUser,
    signIn,
    profileUpdate,
    googleLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;