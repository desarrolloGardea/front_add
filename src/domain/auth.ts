/**
 *
 */
export type Role =
  'user' |
  'admin' |
  'supervisor';

/**
 *
 */
export interface User {
  name: string;
  password: string;
}

/**
 *
 */
export interface Session {
  userId: string;
  token: string;
  expiresAt: number;
  role: Role;
}