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
import { getPosts, getTopPosts } from "../service";
import useAuthStore from "../store/authStore";

const StateContext = createContext<any | null>(null);

const initialState = [];

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userProfile } = useAuthStore() as any;
  const [allPost, setAllPosts] = useState();
  const [topPosts, setTopPosts] = useState<any>() ; 

  const fetchTopPosts = async () => {
    const res = await getTopPosts(userProfile.token) ; 
    
    setTopPosts(res.getTopPosts) ;
  }
  const fetchAllPost = async () => {
    try {
      const { token } = userProfile as any;
      const res = (await getPosts(token)) as any;
      setAllPosts(res.getAllPosts);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllPost();
    fetchTopPosts() ; 
    console.log(allPost);
    console.log(userProfile) ;
  }, [ userProfile]);

  return (
    <StateContext.Provider value={{ allPost, setAllPosts , topPosts}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
