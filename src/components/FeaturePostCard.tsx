import React from "react";
import { IPost } from "../types/types";

interface IProps {
  post: IPost;
}

const FeaturePostCard = ({ post }: IProps) => {
  return (
    <div className="relative h-72 cursor-pointer">
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?${post.category}')`,
        }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          {post.postedAt}
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
          {post.title}
        </p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <img
            src={`https://source.unsplash.com/1600x900/?${post.id}`}
            alt={`${post.author}`}
            
            className="align-middle drop-shadow-lg rounded-full h-[30px] w-[30px]"
          />
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            {post.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturePostCard;
