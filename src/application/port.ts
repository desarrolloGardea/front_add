import type { User } from '../domain/auth';
import type { Session } from '../domain/auth';
import type  ApiResponse from '../domain/apiResponse';


/**
 * Set together the port for the API
 */

export interface ApiService{
    login: (user: User) => Promise<ApiResponse<Session | null>>;
}

export type SignInAction = (session: Session) => void;
export type LogOutAction = () => void;
