import React from "react";
import { AiFillLike } from "react-icons/ai";
import {BiComment} from "react-icons/bi"
import { IPost } from "../types/types";

interface IProps {
  post: IPost;
}
const PostCard = ({ post }: any) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          alt="post-pic"
          src={`https://source.unsplash.com/1600x900/?${post.category}`}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        {/* a tag here lead to posr */}
        {post.title}
      </h1>

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt="user-pic"
            src={`https://source.unsplash.com/1600x1600/?${post.id}`}
            className="h-[30px] w-[30px] rounded-full align-middle"
          />
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
            {post.user.username}
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
          <span className="align-middle">{post.createdAt.slice(0,10)} </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.message}
      </p>
      <div className="text-center">
        <p className="inline-block align-middle text-gray-700 ml-2 font-medium text-lg">
          {post.numLikes}
        </p>
        <p className="inline-block align-middle text-gray-700 ml-2 font-medium text-lg">
          <AiFillLike />
        </p>
      </div>
      <div className="text-center">
        <p className="inline-block align-middle text-gray-700 ml-2 font-medium text-lg">
          {post.numComments}
        </p>
        <p className="inline-block align-middle text-gray-700 ml-2 font-medium text-lg">
          <BiComment />
        </p>
      </div>
      <br />
      <div className="text-center">
        <a href={`/post/${post.id}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </a>
      </div>
    </div>
  );
};

export default PostCard;
