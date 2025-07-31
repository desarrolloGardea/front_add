import type { User } from '../domain/auth';
import type { Session } from '../domain/auth';
import type { ApiService, SignInAction, LogOutAction } from './port';


export default async function authenticate(user: User, api: ApiService, signIn: SignInAction): Promise<Boolean> {
    const resp = await api.login(user);
    const logOut: LogOutAction = () => {};

    if (resp.data) {
        const session: Session = resp.data;
        signIn(session)
        return true
    }
    logOut();
    return false;
}
