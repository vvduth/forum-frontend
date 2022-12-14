import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { featuredPost } from "../data/Dummy_data";
import FeaturePostCard from "./FeaturePostCard";
import { getTopPosts } from "../service";
import { IPost } from "../types/types";
import useAuthStore from "../store/authStore";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};
const FeaturePost = () => {
  const [topPosts, setTopPost] = useState<any>();
  const { userProfile } = useAuthStore() as any;
  const fetchTopPosts = async () => {
    const res = await getTopPosts(userProfile.token);

    setTopPost(res.getTopPosts);
  };

  useEffect(() => {
    fetchTopPosts();
  }, []);
  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );
  return (
    <div className="mb-8">
      <p className="px-4 text-3xl text-white font-bold mb-3">Popular post</p>
      {!userProfile && (
        <div className="text-xl text-white mb-11 px-4">
          Please log in or create an account to see all the posts
        </div>
      ) }
      {topPosts && userProfile ? (
        <Carousel
          infinite
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          itemClass="px-4"
        >
          {topPosts.map((post: IPost) => (
            <a href={`/post/${post.id}`} key = {post.id}>
              <FeaturePostCard key={post.id} post={post} />
            </a>
          ))}
        </Carousel>
      ) : (
        <div className="text-xl text-white mb-11 px-4">
          
        </div>
      )}
      {userProfile && !topPosts ? (
        <div className="text-xl text-white mb-11 px-4">
          Loading, please wait ...
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FeaturePost;
