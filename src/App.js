import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Paignation from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {
  const data = useContext(AppContext)
  useEffect(() => {
    data.fetchBlogPosts()
  } ,[])
  return (
    <div className="m-w-[1080px] w-[1080px] mx-auto">
      <Header />
      <Blogs />
      <Paignation />
    </div>
  );
}
