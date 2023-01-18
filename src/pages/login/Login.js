import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
 const [user,setUser] =useState("");
 const [room,setRoom] =useState("");


    return (
        <>
        <div className=" grid place-content-center">

        <div className=' grid place-content-center my-52 py-4 px-6 w-fit  shadow-lg shadow-slate-600   '>
        <div >
            <p className='  mx-14 pl-3 py-4 rounded-full h-16 w-16 borde bg-blue-700 m-2'>Login</p>
            </div>
            <div className='text-blue-400 mb-6 mx-2'>
                <p>Login to Your Account</p>
                </div>
                <div>
                    <form method='post' className=''>
                        <div className=' border '>
                        <input onChange={(e)=> setUser(e.target.value)} className=' pt-2 px-2' type='text' placeholder='Username' name='username'/>
                        </div>
                        <div className='mt-7 border'>
                            <input onChange={(e)=> setRoom(e.target.value)} className=' pt-2 px-2' type='password' placeholder='Room ID' name='room'/>
                        </div>
                      <div>
                        <Link onClick={(e) => (!user || !room)? e.preventDefault(): null}
                        to={`/chat?name=${user}&room=${room}`}>
                        <button  className='border mt-3  pb-1 pt-1 px-1 ml-14 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded '>Connect</button>
                        </Link>
                        </div>  
                    </form>
                </div>
        </div>
        </div>
        </>


    )
}
export default Login;