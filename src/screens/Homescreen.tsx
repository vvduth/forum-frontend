import React, { useEffect, useMemo, useState } from "react";
import FeaturePost from "../components/FeaturePost";
import { featuredPost } from "../data/Dummy_data";
import { IPost } from "../types/types";
import PostCard from "../components/PostCard";
import { getPosts } from "../service";

import { Route } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { getPostsByUsername, sendLike, unLike } from "../service";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import Stack from "@mui/material/Stack";
import { useStateContext } from "../context/ContextProvider";


let PageSize = 5;

const Homescreen = () => {
  const { userProfile } = useAuthStore();
  const {allPost, setAllPosts} = useStateContext() as any ;

  return (
    <Layout>
      {/* <button onClick={likePost}>Send Like </button>
      <button onClick={unLikePost}>UnLike </button> */}
      {allPost && <></>}
      {allPost && (
        <>
          {allPost.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
          
        </>
      )}
      <Pagination />
    </Layout>
  );
};

export default Homescreen;
