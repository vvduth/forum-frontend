import React, { useEffect, useState } from "react";
import { IPost } from "../types/types";
import { IUser } from "../types/types";
import { featuredPost } from "../data/Dummy_data";
import { getPostsByUsername } from "../service";
import useAuthStore from "../store/authStore";

const AdjacentPostCard = ({ author, post }: any) => {
  const { userProfile } = useAuthStore();
  const [adjacentPost, setAdjacentPost] = useState<any | null>();
  const { token } = userProfile as any;

  const getAdjacentPost = async () => {
    console.log(author)
    try {
      if (author) {
        const res = await getPostsByUsername(token, author);
      let diffPosts = res.getPostsByUsername.filter(
        (item: any) => item.id !== post.id
      );
      if (diffPosts.length > 0) {
        setAdjacentPost(diffPosts[0]);
        console.log(diffPosts[0]);
      }

      
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAdjacentPost();
  }, [author]);
  return (
    <>
      <div
        className="text-center mt-20 mb-8 p-12 relative rounded-lg  bg-center bg-no-repeat bg-cover shadow-md"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?${adjacentPost?.category}')`,
        }}
      >
        <div className=" flex flex-col">
          <div className="text-white float-left hover:text-yellow-300 hover:font-bold text-3xl">
            More post from {author}
          </div>
          <div className="text-white text-shadow font-semibold text-xs">
            {adjacentPost?.postedAt}
          </div>
          <div className="text-white text-shadow font-semibold text-2xl text-center hover:underline hover:text-yellow-300 hover:text-3xl">
            <a href={`/post/${adjacentPost?.id}`}>
              <p>{adjacentPost?.title}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdjacentPostCard;
