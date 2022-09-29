import React from "react";
import FeaturePost from "../components/FeaturePost";
import { featuredPost } from "../data/Dummy_data";
import { IPost } from "../types/types";
import PostCard from "../components/PostCard";
const Homescreen = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturePost />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">

          {featuredPost.map((post:IPost)=> (
            <PostCard key={post.id} post= {post} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
