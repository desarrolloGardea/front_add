import useLogin from "./login.hook";

export default function Login() {
    const [user, handleChange, habdleSubmit] = useLogin();

    return (
        <>
            <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-r from-base to-baseDark">
                <div className="absolute t-0 l-0 flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-white rounded-2xl border border-black shadow-xl">
                    <h2 className="text-2xl font-bold text-center mb-8">Ahorita, déjame divagar</h2>
                    <form onSubmit={habdleSubmit} className="flex flex-col">
                        <input
                            type="text"
                            name="name"
                            placeholder="Usuario"
                            className="border border-black p-2 mb-8 rounded-md"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="border border-black p-2 mb-8 rounded-md"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-baseDark text-white p-2 rounded-md hover:bg-base transition"
                        >
                            Ingresar
                        </button>
                    </form>
                </div>
                <div className='absolute bottom-0 right-0 text-white p-4 font-ligth'>{`versión ${import.meta.env.VITE_VERSION}`}</div>
            </div>
        </>

    );
}