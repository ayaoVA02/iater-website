// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const tokenCreatedAt = localStorage.getItem("token_created_at");

    if (storedToken && tokenCreatedAt) {
      const ageInMs = Date.now() - parseInt(tokenCreatedAt, 10);
      const twentyFourHoursInMs = 24 * 60 * 60 * 1000;

      if (ageInMs < twentyFourHoursInMs) {
        setTokenState(storedToken);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("token_created_at");
      }
    }

    setLoading(false); // mark finished loading even if token is null
  }, []);

  const setToken = (newToken: string | null) => {
    if (newToken) localStorage.setItem("token", newToken);
    else localStorage.removeItem("token");
    setTokenState(newToken);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isAuthenticated: !!token,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
