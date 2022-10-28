import React, { useEffect, useState } from "react";
import FeaturePost from "../components/FeaturePost";
import { featuredPost } from "../data/Dummy_data";
import { IPost } from "../types/types";
import PostCard from "../components/PostCard";
import { getPosts } from "../service";
import { Route } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { getPostsByUsername, sendLike, unLike } from "../service";
import Layout from "../components/Layout";
const Homescreen = () => {
  const { userProfile } = useAuthStore();

  const [allPost, setAllPost] = useState<any>(null);
  const fetchAllPost = async () => {
    const { token } = userProfile as any;
    const res = (await getPosts(token)) as any;
    setAllPost(res.getAllPosts) ;
    console.log(res) ;
  };
  const getAllPostByUsername = async () => {
    const { token } = userProfile as any;
    const res = (await getPostsByUsername(token, "inatsuz")) as any;

    console.log(res);
  };

  const likePost = async () => {
    const { token } = userProfile as any;
    const postId = "6344ac985528a0110caa399b";
    const res = (await sendLike(token, postId)) as any;
    console.log(res);
  };

  const unLikePost = async () => {
    const { token } = userProfile as any;
    const postId = "6344ac985528a0110caa399b";
    const res = (await unLike(token, postId)) as any;
    console.log(res);
  };

  useEffect(() => {
    fetchAllPost() ; 
    console.log(allPost);
  }, []);
  return (
    <Layout>
      
      <button onClick={likePost}>Send Like </button>
      <button onClick={unLikePost}>UnLike </button>
      {allPost && allPost.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Homescreen;
