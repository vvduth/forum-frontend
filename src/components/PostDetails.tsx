import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import PostWidget from "./PostWidget";
import { featuredPost } from "../data/Dummy_data";
import { IPost } from "../types/types";
import Author from "./Author";
import AdjacentPostCard from "./AdjacentPostCard";
import Layout from "./Layout";
import CommentForm from "./CommentForm";
import { getOnePostById } from "../service";
import useAuthStore from "../store/authStore";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { sendLike, unLike } from "../service";
import Comments from "./Comments";
const PostDetails = () => {
  const [post, setPost] = useState<any | null>(null);
  const { userProfile } = useAuthStore() as any;
  const id = useParams();
  const [isLike, setIsLike] = useState<any>();
  const [likes, setLikes] = useState<any>() ;
  useEffect(() => {}, []);

  const getOnePost = async () => {
    try {
      const res = await getOnePostById(userProfile.token, id.id);

      setPost(res.getPostById);
      console.log(res.getPostById);

      const temp = res.getPostById.likes.find((elem: any) => {
        return elem.username === userProfile.name;
      });
      setIsLike(!!temp);
      setLikes(res.getPostById.numLikes) ; 
      console.log("not not temp ", !!temp);
    } catch (e) {
      console.log(e);
    }
  };
  
  const Likehandler = async () => {
    if (isLike) {
      setIsLike(!isLike);
      setLikes(likes - 1)
      await unLike(userProfile.token, id.id) ;
    } else {
      setIsLike(!isLike);
      setLikes(likes + 1 ) ;
      await sendLike(userProfile.token, id.id)

    }
  }

  useEffect(() => {
    getOnePost();
  }, [id]);

  return (
    <Layout>
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
                alt={post?.user.username}
                className="align-middle rounded-full h-[30px] w-[30px]"
                src={`https://source.unsplash.com/1600x900/?${post?.id}`}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {post?.user.username}
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
              <span className="align-middle">{post?.createdAt.slice(0,10)}</span>
            </div>
            {isLike ? (<AiFillLike onClick={Likehandler} className="h-6 w-6 inline mr-2 ml-3 text-pink-500 cursor-pointer"/>) :(<AiOutlineLike className="h-6 w-6 inline mr-2 ml-3 text-pink-500 cursor-pointer" onClick={Likehandler}/> )}
            {likes}
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post?.title}</h1>
          <p className="mb-8">{post?.message}</p>
        </div>
       
      </div>
      <Author author={post?.user} />
      <AdjacentPostCard author={post?.user.username} post={post} />
      {post && post?.comments ? (
        <>
          {post?.comments.map((comment: any) => (
            <Comments key={comment.id} comment={comment} />
          ))}
        </>
      ) : (
        <></>
      )}
      <CommentForm postId={id.id} refreshPostCallback={getOnePost} />
    </Layout>
  );
};

export default PostDetails;
