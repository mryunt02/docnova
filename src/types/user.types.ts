export interface User {
  jwt: string;
  email: string;
  id?: string;
  name?: string;
  role?: string;
  lastCompanyId?: string;
  companies?: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
