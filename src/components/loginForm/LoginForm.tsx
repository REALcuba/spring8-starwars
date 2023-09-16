import { ChangeEvent } from "react"
// import { UseLocaleStorage } from "../customHooks/UseLocaleStorage";
// import { useNavigate } from "react-router-dom";
// import bg from '../../assets/img/sw_background.jpeg'
// type LoginFormProps = {
//     // e: Event;
//     handleLogin: () => void
// }
const LoginForm: React.FC = ({ setEmailValue, handleSubmitLogin, emailValue }) => {
    // const [isLogin, setIsLogin] = useState(false);
    // const [emailValue, setEmailValue] = useState('');
    // const [clientsArr, setClientsArr] = UseLocaleStorage("emails", []);
    // const [localeStorageClient, setLocaleStorageClient] = UseLocaleStorage("emails", [])
    // const navigate = useNavigate()


    const inputClassName = emailValue != '' ? 'pointer-events-none absolute top-[-10px] mb-0 max-w-[90%] text-[0.80rem] dark:text-neutral-200 left-1  text-neutral-500 ' : 'pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:-translate-x-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'

    const handleEmailValue = (event: ChangeEvent<HTMLInputElement>) => setEmailValue(event.target.value);


    // const handleSubmitLogin = () => {
    //     if (emailValue.trim() === "") {
    //         alert("Por favor, ingresa un correo válido");
    //         return;
    //     }

    // const updatedClientsArr = [...clientsArr, emailValue];
    // setClientsArr(updatedClientsArr);
    // if (clientsArr.includes(emailValue)) {
    //    navigate("/main-page");

    // }else{

    //     navigate('/sign-in')
    // }
    // setEmailValue("");

    // };

    // console.log(emailValue);
    // const handleSubmitLogin = () => {
    //     if (emailValue.trim() === '') {
    //         alert('Por favor, ingresa un correo válido');
    //         return;
    //     }
    //     // setLocaleStorageClient(updatedClientsArr);
    //     const updatedClientsArr:string[] = [...clientsArr, emailValue]
    //     setClientsArr(updatedClientsArr)
    //     // setClientsArr(localeStorageClient)
    //     // setEmailValue("");

    // }
    // console.log(isLogin);
    // console.log(clientsArr);


    // useEffect(() => {
    // Comprueba si el correo electrónico existe en el localStorage
    // if (!clientsArr.includes(emailValue)) {
    //     // Si existe, redirige al usuario a la página principal
    //     // navigate("/mainPage");
    // //    navigate('/sign-in')
    //    navigate("/mainPage");

    // }


    //     navigate('/sign-in')

    // }, [clientsArr, emailValue, navigate]);

    return (
        <>
            <section className='bg-black  flex h-full justify-center gap-4 items-center bg-spacebg bg-cover bg-center'>
                {/* <p>Welcome star figther</p> */}
                {/* <!-- Right column container with form --> */}
                <div className="md:w-6/12 lg:ml-6 lg:w-5/12 bg-white flex gap-4 rounded-lg justify-center ">
                    <div className="mx-6 w-2/3 ">
                        <form className="bg-white rounded-lg flex flex-col gap-6"
                            onSubmit={handleSubmitLogin}>
                            <header className="font-bold flex flex-star mt-4 "><h2>Enter your email</h2></header>
                            <p className="flex flex-star text-sm ">Log into your Star Wars account. If you don't have one, you will be prompted to create one.</p>

                            {/* <!-- Email input --> */}
                            <div className="relative rounded-xl bg-gray-200 " >
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="formControlEmail"
                                    onChange={handleEmailValue}
                                // placeholder="Email address" 
                                />
                                <label htmlFor="formControlEmail"
                                    className={inputClassName}
                                >Email
                                </label>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button
                                type="submit"
                                className="inline-block w-full rounded-full bg-yellow-400 px-7 py-3 "
                            // onClick={handleLogin}
                            // onSubmit={ setlocaleStorageClient(updatedClientsArr)}
                            >
                                Continue
                            </button>

                            {/* <!-- Divider --> */}
                            <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
                            <footer
                                className="my-4 items-center gap-2 before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <h6
                                    className=" text-center font-semibold text-gray-600 text-xs">
                                    Star Wars is part of The Walt Disney Family of Companies.
                                </h6>
                                <p className="text-[10px] text-gray-500">
                                    This email and password lets you seamlessly log into services and experiences across The Walt Disney Family of Companies, such as ESPN, Walt Disney World, Marvel, and more.
                                </p>
                            </footer>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginForm
