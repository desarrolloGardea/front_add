import type { Session }  from "./auth";

export interface SessionStore {
    session: Session |  null;
    isAuthenticated: boolean;
    signIn:(session: Session) => void;
    signOut:() => void;
}