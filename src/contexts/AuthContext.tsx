import { createContext, useContext, useState, type ReactNode } from 'react';
import { authData } from '../data/auth';

type AuthContextData = {
    isAuthenticated: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
    children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(username: string, password: string) {
        const isValid =
            username === authData.username &&
            password === authData.password;

        if (isValid) {
            setIsAuthenticated(true);
            return true;
        }

        return false;
    }

    function logout() {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}
