// src/components/Login.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { login } from "../../../redux/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("trying...")
    dispatch(login({ email, password }))
    navigate('/');
  };

  return (
    <div className="min-h-screen  bg-lightTheme-secondary dark:bg-darkTheme-secondary pt-32 ">
      <div className=" p-5 rounded shadow-md w-80 md:w-96 bg-white mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="blocktext-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <a href="https://project-expo-ecru.vercel.app/">
        <button
          className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
        </a>
        <p className='mt-3'>New to Project Expo? <Link to='/auth/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
