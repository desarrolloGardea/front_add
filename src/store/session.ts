import type { Role, Session } from "../domain/auth";
import { create } from 'zustand';
import { persist } from "zustand/middleware";
import type { SessionStore } from "../domain/session";

/**
 *
 */


const PERSISTABLE_ROLES: Role[] = ['USER', 'ADMIN', 'SUPERVISOR'].map(role => role as Role);
const useSession = create<SessionStore>()(
    persist(
        (set, get) => ({
            session: null,
            isAuthenticated: false,

            signIn: (session: Session) => {
                set({
                    session,
                    isAuthenticated: true
                })
            },

            signOut: () => {
                set({
                    session: null,
                    isAuthenticated: false
                })
            }
        }),
        {
            name: 'session',
            partialize: (state) => PERSISTABLE_ROLES.includes(state.session?.role ?? Role.USER)
        }
    )
)
export default useSession;