import React from 'react'

const LoginForm = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Login to like  and comment</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="email" value={''} onChange={() =>{}} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
        <input type="password" value={''} onChange={() =>{}} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Password" name="password" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={true} onChange={() =>{}} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <a>
            <span className='text-gray-500 cursor-pointer hover:underline'>New to these stuff? Create new account</span>
        </a>
      </div>
    
      <div className="mt-8">
        <button type="button" onClick={() => {}} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {true && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default LoginForm
