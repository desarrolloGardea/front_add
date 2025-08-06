import useLogin from "./login.hook";

export default function Login() {
    const [user, handleChange, habdleSubmit] = useLogin();

    return (
        <>
            <section className="w-screen h-screen flex columns-2xs bg-gradient-to-b from-base to-baseContrast">
                <div className="w-1/2 h-full flex flex-col justify-center p-12 items-start pr-10 space-y-12">

                    <div className="flex items-baseline">
                        <span className="text-8xl text-white font-extrabold leading-none">A</span>
                        <span className="text-3xl text-white font-semibold ml-1">horita</span>
                    </div>
                    <div className="flex items-baseline">
                        <span className="text-8xl text-white font-extrabold leading-none">D</span>
                        <span className="text-3xl text-white font-semibold ml-1">éjame</span>
                    </div>
                    <div className="flex items-baseline">
                        <span className="text-8xl text-white font-extrabold leading-none">D</span>
                        <span className="text-3xl text-white font-semibold ml-1">ivagar</span>
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center p-12 items-start">

                    <form onSubmit={habdleSubmit} className="flex flex-col w-2/3 max-w-md">
                        <p className="text-1xl text-white font-bold">Usuario</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="@usuario"
                            className="border border-black p-2 mb-8 rounded-md"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                        <p className="text-1xl text-white font-bold">Contraseña</p>
                        <input
                            type="password"
                            name="password"
                            placeholder="*****"
                            className="border border-black p-2 mb-8 rounded-md"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-baseContrast text-primary p-2 rounded-md hover:bg-base transition"
                        >
                            Ingresar
                        </button>
                    </form>
                </div>

            </section>
        </>

    );
}