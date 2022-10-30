import React from 'react'
import { categories } from '../data/Dummy_data'
import { useStateContext } from '../context/ContextProvider';
const Categories = () => {
  const {topPosts} = useStateContext() as any ; 
  return (
    <>
    {
      topPosts ? (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {topPosts.map((post:any, index:any) => (
        <a key={index} href={`/`}>
          <span className={`cursor-pointer block ${(index === topPosts.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{post.category}</span>
        </a>
      ))}
    </div>
      ) : (
        <>
        </>
      )
    }
    </>
  );
  
}

export default Categories
