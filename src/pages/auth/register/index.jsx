// src/components/Registration.js
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [degree, setDegree] = useState('');
    const [rollNumber, setRollNumber] = useState('');

    const handleRegistration = () => {
        // Implement your registration logic here
    };

    return (
        <div className="min-h-screen bg-lightTheme-secondary dark:bg-darkTheme-secondary pt-12">
            <div className="bg-white p-5 rounded shadow-md w-80 md:w-96 mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Registration</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNumber">
                        Roll Number
                    </label>
                    <input
                        className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                        type="text"
                        id="rollNumber"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                        placeholder="Enter your roll number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="college">
                        College
                    </label>
                    <select
                        className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                        id="college"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                    >
                        <option value="">Select your college</option>
                        <option value="college1">College 1</option>
                        <option value="college2">College 2</option>
                        {/* Add more college options here */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
                        Degree
                    </label>
                    <select
                        className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                        id="degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                    >
                        <option value="">Select your degree</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="postgraduate">Postgraduate</option>
                        <option value="diploma">Diploma</option>
                    </select>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleRegistration}
                >
                    Register
                </button>
                <p className='mt-3'>Already Registered? <Link to='/auth/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
