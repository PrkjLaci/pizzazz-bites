import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        email: "",
        token: "",
    });

    console.log("userData", userData);
    

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };