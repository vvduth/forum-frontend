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
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import usePagination from "../hook/usePagination";
import { useStateContext } from "../context/ContextProvider";


let PageSize = 5;

const Homescreen = () => {
  const { userProfile } = useAuthStore();
  const {allPost, setAllPosts} = useStateContext() as any ;
 
  const [currentPage, setCurrentPage] = useState(1);
  const [lengthAllPost, setLengthAllPost] = useState(0);
  const [pagesCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  const [count, setCount] = useState(0);
  const [paginatedData, setPaginatedData] = useState<any>();
  const PER_PAGE = 5;

  
  // const count = Math.ceil(allPost.length / PER_PAGE);
  

  const handleChange = (e: any, p: any) => {
    setPage(p);
    paginatedData.jump(p);
  };

 
  const paginateDaTa = () => {
    
  }

 
  useEffect(() => {
      console.log("from context", allPost)
      setPaginatedData(allPost) ;
  }, [allPost]);
  return (
    <Layout>
      {/* <button onClick={likePost}>Send Like </button>
      <button onClick={unLikePost}>UnLike </button> */}
      {paginatedData && <></>}
      {paginatedData && (
        <>
          {paginatedData.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </>
      )}
    </Layout>
  );
};

export default Homescreen;
