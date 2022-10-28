import React from 'react'

const Comments = ({comment}:any) => {
  return (
  
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full pt-10">
          <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
            <img
              alt="username"
              className="align-middle rounded-full h-[30px] w-[30px]"
              src={`https://source.unsplash.com/1600x900/?travel`}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {comment.user.username}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">{comment.createdAt}</span>
          </div>
        </div>
        
        <p className="mb-8">
          {comment.message}
        </p>
      </div>
    </div>
    

  )
}

export default Comments