import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import usePagination from "../hook/usePagination";
import { getPosts, getTopPosts , getPostsWithPagination} from "../service";
import useAuthStore from "../store/authStore";

const StateContext = createContext<any | null>(null);

const POSTS_PER_PAGE = 5 ;    

const initialState = [];

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userProfile } = useAuthStore() as any;
  const [allPost, setAllPosts] = useState();
  const [topPosts, setTopPosts] = useState<any>() ;
  const [totalPosts, setTotalPosts] = useState<any>() ; 
  const [postsWithPagination, setPostsWithPagination] = useState<any>() ; 
  const [currentPage, setCurrentPage] = useState<any>(0) ; 
  const [pages, setPages] = useState<number>(0) ; 


  const fetchTopPosts = async () => {
    const res = await getTopPosts(userProfile.token) ; 
    setTopPosts(res.getTopPosts) ;
  }

  const goToPreviousPage = async () => {
    if (currentPage === 0 ) {
      // do nothing 
    } else if (currentPage >= 1 ) {
       setCurrentPage(currentPage -1 ) ; 
    }
  }
  const goToNextPage = async () => {
    console.log("Åages " + pages)
    if (currentPage === pages && pages !== 0  ) {
      // do nothing 
    } else if (currentPage < (pages -1)  && pages !== 0 ) {
     setCurrentPage(currentPage + 1 ) ; 
    }
  }
  const fetchPostWithPagination = async (page: any) => {
    try {
      const {token } = userProfile as any ; 
      const res = await getPostsWithPagination(token , page) as any ; 
      setPostsWithPagination(res.getAllPosts) ; 
      // the number of postes per page
      
    } catch(e) {
      console.log(e)
    }
  }
  const fetchAllPost = async () => {
    try {
      const { token } = userProfile as any;
      const res = (await getPosts(token)) as any;
      setAllPosts(res.getAllPosts);
      // total number of post 
      setTotalPosts(res.getAllPosts.length) ;
      setPages(Math.ceil(res.getAllPosts.length / POSTS_PER_PAGE) ) ; 
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllPost();
    fetchTopPosts() ; 
    fetchPostWithPagination(currentPage) ; 
  }, [ userProfile, currentPage]);

  return (
    <StateContext.Provider value={{ allPost, setAllPosts , topPosts, postsWithPagination, currentPage, totalPosts, pages, goToNextPage, goToPreviousPage}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
