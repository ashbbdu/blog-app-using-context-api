import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

 export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1); //currnet page
  const [totalPages, setTotalPages] = useState(null);

  // value here is the data which we want to send to our child components
  const fetchBlogPosts = async (page = 1) => {
    setLoading(true)
    const url = `${baseUrl}?page=${page}`;
    try {
        const result = await fetch(url);
        const data = await result.json()
        setPage(data.page);
        setPost(data.posts);
        setTotalPages(data.totalPages)
    }
    catch (e) {
        console.log("Error in fetching data");
        setPage(1);
        setPost([]);
        setTotalPages(null)
    }
    setLoading(false)
  }

  const handlePageChange = (page) => {
    setPage(page)
    fetchBlogPosts(page)
  }

  const value = {
    loading,
    setLoading,
    post,
    setPost,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange
  };

 

  //   Syntax
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

