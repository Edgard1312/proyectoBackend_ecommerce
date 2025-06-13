import { createContext, useState, useContext} from "react";
import { registerRequest, loginRequest} from '../api/auth'

export const AuthContext = createContext()


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


  
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setisAuthenticated(true);
    } catch (error) {
      console.log(error.response)
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {  

    try {
       const res = await loginRequest(user);
       console.log(res);
    }catch (error) {
      console.log(error); {
        setErrors(error.response.data);
      
    }
   }
  };


  return <AuthContext.Provider value={{
    signup,
    signin,
    user,
    isAuthenticated,
    errors
  }}>{children}</AuthContext.Provider>;
};
