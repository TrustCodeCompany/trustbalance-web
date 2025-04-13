import { create } from 'zustand';

interface AuthState {
  token: string | null;
  email: string | null;
  roles: string[];
  setAuthData: (token: string, email: string, roles: string[]) => void;
  setToken: (token: string) => void;
  setEmail: (email: string) => void;
  setRoles: (roles: string[]) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  email: null,
  roles: [],
  setAuthData: (token, email, roles) => set({ token, email, roles }),
  setToken: (token) => set({ token }),
  setEmail: (email) => set({ email }),
  setRoles: (roles) => set({ roles }),
  logout: () => set({ token: null, email: null, roles: [] }),
}));
