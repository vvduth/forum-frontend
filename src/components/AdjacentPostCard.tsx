import React, { useEffect, useState } from "react";
import { IPost } from "../types/types";
import { IUser } from "../types/types";
import { featuredPost } from "../data/Dummy_data";

interface IProps {
  author: string | undefined;
  post: IPost | null;
}

const AdjacentPostCard = ({ author, post }: IProps) => {
  const [adjacentPost, setAdjacentPost] = useState<IPost | null>();

  useEffect(() => {
    let relevantPost = featuredPost.filter(
      (postItem) => postItem.author === author && postItem.id !== post?.id
    );
    setAdjacentPost(relevantPost[0]);
  }, [author, post]);
  return (
    <>
      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg  bg-center bg-no-repeat bg-cover shadow-md" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?${adjacentPost?.category}')` }}>
      
        <div className=" flex flex-col">
          <div className="text-white float-left hover:text-yellow-300 hover:font-bold text-3xl">
            More post from {adjacentPost?.author}
          </div>
          <div className="text-white text-shadow font-semibold text-xs">
            {adjacentPost?.postedAt}
          </div>
          <div className="text-white text-shadow font-semibold text-2xl text-center hover:underline hover:text-yellow-300 hover:text-3xl">
            
            <a href={`/post/${adjacentPost?.id}`}>
            {adjacentPost?.title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdjacentPostCard;
