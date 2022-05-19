import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch(err) {
            localStorage.removeItem('user');
            console.log(err);
        }
    }, [user])

    const contextValue = {
        user,
        login() {
            setUser({ id: 1, username: 'nico91' });
        },
        logout() {
            setUser(null)
        },
        isLogged() {
            return !!user;
        }
    }
    
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}