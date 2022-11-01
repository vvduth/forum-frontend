import React from 'react'
import { featuredPost } from '../data/Dummy_data'
import { IPost } from '../types/types'
import { useStateContext } from '../context/ContextProvider'
const PostWidget = () => {
    const {topPosts} = useStateContext() as any ; 
  return (
   <>
    {topPosts ? ( <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'> 
        <h3 className='text-xl mb-8 font-semibold border-b border-blue-500 pb-4' >
            Recent Posts
        </h3>
        {topPosts.slice(0,3).map((post: IPost) => (
           <a href={`/post/${post.id}`}>
             <div key={post.id} className="flex items-center w-full mb-4">
                <div className='w-16 flex-none'>
                    <img 
                        src={`https://source.unsplash.com/1600x900/?${post.category}`}
                        alt={post.title}
                        className="align-middle rounded-full h-[60px] w-[60px]"
                    />
                </div>
                <div className='flex-grow m-4'>
                    <p className='text-gray-500 font-xs'>{post.postedAt}</p>
                    {/* link here as well */}
                    <p className='text-md'>{post.title}</p>
                </div>
            </div>
           </a>
        ))}
    </div>): (
        <></>
    )}
   </>
  )
}

export default PostWidget
