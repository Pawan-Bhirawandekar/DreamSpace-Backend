import React, { useContext, useState } from 'react';
// import { BackendIntegration } from '../context/BackendIntegration';
import axios from 'axios';

const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up');
    // const {token, setToken,backendUrl} = useContext('BackendIntegration');

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        try{
            if(currentState === 'Sign Up'){
                const response= await axios.post('http://localhost:4000/api/user/register',{name,email,password});
                console.log(response.data)
                if(response.data.success){
                    console.log('User Registered Successfully and now redirect to welcome page');
                } else {
                    console.log('User Registration Failed');
                }
            }else{
                // Login
                const response= await axios.post('http://localhost:4000/api/user/login',{email,password});
                if(response.data.success){
                    console.log('User Logged in Successfully and now redirect to welcome page');
                } else {
                    console.log('User login Failed');
                }
            }
                    
        }catch(error){

        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-md gap-4 text-gray-800">
                <div className="inline-flex items-center gap-2 mb-4">
                    <p className="prata-regular text-3xl text-center">{currentState}</p>
                    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
                </div>
                {currentState === 'Login' ? '' : (
                    <input onChange={(e)=>setName(e.target.value)} value={name}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-800 rounded-md"
                        placeholder="Name"
                        required
                    />
                )}
                <input onChange={(e)=>setEmail(e.target.value)} value={email}
                    type="email"
                    className="w-full px-3 py-2 border border-gray-800 rounded-md"
                    placeholder="Email"
                    required
                />
                <input onChange={(e)=>setPassword(e.target.value)} value={password}
                    type="password"
                    className="w-full px-3 py-2 border border-gray-800 rounded-md"
                    placeholder="Password"
                    required
                />
                {/* Adjusted the spacing */}
                <div className="w-full flex justify-between text-sm mt-2">
                    <p className="cursor-pointer">Forgot your password?</p>
                    {currentState === 'Login' ? (
                        <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
                            Create account
                        </p>
                    ) : (
                        <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
                            Login Here
                        </p>
                    )}
                </div>
                <button className="bg-black text-white font-light px-[45px] py-[15px] mt-4 rounded-md cursor-pointer">
                    {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Login;
