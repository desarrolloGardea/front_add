import useSession from "../../store/session";
import type { User } from "../../domain/auth";
import authenticate  from "../../application/auth";


//infraestructure
import ApiAdapter from "../../service/api";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function useLogin() {
    const api = ApiAdapter();
    const navigate = useNavigate();
    const signIn = useSession((state: any) => state.signIn)
    const [user, setUser] = useState<User>({ name: "", password: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const habdleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const isLogged = await authenticate(user, api, signIn);
        isLogged && navigate("/");
        !isLogged && alert("Invalid credentials")
    }
    return [user, handleChange, habdleSubmit] as const

}
