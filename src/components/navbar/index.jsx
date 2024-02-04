import { Link } from "react-router-dom"
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../redux/themeSlice";
import { useEffect, useState } from "react";
import { logout } from "../../redux/userSlice";
const Navbar = () => {
    const darkTheme = useSelector(state => state.theme.darkTheme);
    const logged = useSelector(state => state.user.logged)
    const dispatch = useDispatch();
    const toggleDarkTheme = () => {
        dispatch(toggleTheme())
    }
    const handelLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkTheme])

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky z-20 top-0 shadow-lg bg-lightTheme-primary text-lightTheme-text dark:bg-darkTheme-primary dark:text-white flex justify-between items-center py-3 px-3 md:px-10">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link
                        className="flex"
                        to='/'>
                        {
                            darkTheme
                                ? <img
                                    className="hidden md:flex w-14 h-14 mr-3"
                                    src="/https://project-expo-ecru.vercel.app/Ellipse6.png"
                                    alt="Logo" />
                                : <img
                                    className="hidden md:flex w-14 h-14 mr-3"
                                    src="https://project-expo-ecru.vercel.app/Ellipse6.png"
                                    alt="Logo" />
                        }
                        <p className=" flex text-3xl items-center">Project Expo</p>
                    </Link>
                    <div className="hidden md:flex items-center space-x-4 text-lg font-semibold">
                        <Link to='/'>Home</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='#'>Collab</Link>
                        <Link to='/about'>About</Link>
                        {logged ? <Link to='/profile'>Profile</Link> : null}
                        {
                            logged
                                ? <Link
                                    onClick={handelLogout}
                                    to='/'
                                    className="border-2 px-2 py-1 rounded-lg flex items-center hover:scale-105">
                                    <p className="m-0 hidden md:inline">Logout</p><BiLogOut size={25} />
                                </Link>
                                : <Link
                                    to='auth/login'
                                    className="border-2 px-2 py-1 rounded-lg flex items-center hover:scale-105">
                                    <p className="m-0 hidden md:inline">college Login </p><BiLogIn size={25} />
                                </Link>
                        }

                        <button
                            className="flex items-center"
                            onClick={toggleDarkTheme}
                        >
                            {
                                darkTheme
                                    ? <img className="h-7 w-7 hover:scale-110" src="/svg/sun.svg" alt="sun" />
                                    : <img className="h-7 w-7 hover:scale-105" src="/svg/moon.svg" alt="moon" />
                            }
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                        >
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden flex flex-col gap-3 pt-3 text-lg font-semibold">
                        <Link to='/'>Home</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/workshops'>Workshops</Link>
                        <Link to='/about'>About</Link>
                        {logged ? <Link to='/profile'>Profile</Link> : null}
                        {
                            logged
                                ? <Link
                                    onClick={handelLogout}
                                    to='/'
                                    className="border-2 px-2 py-1 rounded-lg flex items-center hover:scale-105">
                                    <p className="m-0 hidden md:inline">Logout</p><BiLogOut size={25} />
                                </Link>
                                : <Link
                                    to='auth/login'
                                    className="border-2 px-2 py-1 rounded-lg flex items-center hover:scale-105">
                                    <p className="m-0 hidden md:inline">Login </p><BiLogIn size={25} />
                                </Link>
                        }
                        <div>
                            <button
                                className="flex items-center"
                                onClick={toggleDarkTheme}
                            >
                                {
                                    darkTheme
                                        ? <img className="h-7 w-7 hover:scale-110" src="/svg/sun.svg" alt="sun" />
                                        : <img className="h-7 w-7 hover:scale-105" src="/svg/moon.svg" alt="moon" />
                                }
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar