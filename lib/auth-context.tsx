'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getToken } from './api';

interface AuthContextType {
  email: string | null;
  setEmail: (email: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in on initial load
    const token = getToken();
    if (token) {
      // Decode the token to get the email
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setEmail(payload.email);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 