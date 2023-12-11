import React from 'react'

const Login = () => {
  return (
    <div>
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Login</h1>
                  

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-[#1a27d9] text-white hover:bg-green-dark focus:outline-none my-1"
                    >Login</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        Wecome back 
                       
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Don't have an account?  
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Signup
                    </a>.
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login