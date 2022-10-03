import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import PostWidget from "./PostWidget";
import { featuredPost } from "../data/Dummy_data";
import { IPost } from "../types/types";
import Author from "./Author";

const PostDetails = () => {
  const [post, setPost] = useState<IPost | null>(null);

  const id = useParams();

  const thisPost = featuredPost.filter(
    (post: IPost) => post.id.toString() === id.id
  );

  useEffect(() => {
    setPost(thisPost[0]);
  }, [id]);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md mb-6">
              <img
                src={`https://source.unsplash.com/1600x900/?${post?.category}`}
                alt=""
                className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
              />
            </div>
            <div className="px-4 lg:px-0">
              <div className="flex items-center mb-8 w-full">
                <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
                  <img
                    alt={post?.author}
                    className="align-middle rounded-full h-[30px] w-[30px]"
                    src={`https://source.unsplash.com/1600x900/?${post?.id}`}
                  />
                  <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                    {post?.author}
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
                  <span className="align-middle">{post?.postedAt}</span>
                </div>
              </div>
              <h1 className="mb-8 text-3xl font-semibold">{post?.title}</h1>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet dui a turpis tristique auctor. Mauris aliquet a ex eu
                sodales. Mauris scelerisque leo vel urna ultrices mattis.
                Quisque facilisis lectus quis porta dignissim. Vestibulum ornare
                laoreet lobortis. Fusce sit amet maximus sem, a molestie massa.
                Nunc vitae vestibulum dolor, nec pretium felis. Donec non
                volutpat eros. Cras nec ipsum euismod, tempor nulla sed,
                lobortis nisi. Nunc sollicitudin mauris id nibh iaculis maximus.
                Phasellus at aliquet nulla, et ullamcorper orci. Donec elit
                odio, cursus non libero suscipit, egestas pharetra ligula.
              </p>
            </div>
          </div>
          <Author author = {post?.author}/> 
        </div>
        
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
