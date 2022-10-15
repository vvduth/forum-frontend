import React, { useEffect, useState } from "react";
import FeaturePost from "../components/FeaturePost";
import { featuredPost } from "../data/Dummy_data";
import { IPost } from "../types/types";
import PostCard from "../components/PostCard";
import { getPosts } from "../service";
import { Route } from "react-router-dom";

import Layout from "../components/Layout";
const Homescreen = () => {
  const [allPost, setAllPost] = useState<any>(null) ; 
  const fetchAllPost = async () => {
    const res = await getPosts() as any ; 
    setAllPost(res[0]) ;
    console.log(res[0])
  }

  useEffect(()=> {
    fetchAllPost() ; 
    console.log(allPost)
  },[])
  return (
    
    <Layout>
      <> { allPost ? (<><p>Yes</p></>): (<><p>no</p></>)}</>
      {featuredPost.map((post:IPost)=> (
          <PostCard key={post.id} post= {post} /> 
            ))}

    </Layout>
  );
};

export default Homescreen;
