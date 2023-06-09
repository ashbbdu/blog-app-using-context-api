import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { loading, post } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length <= 0 ? (
        "No Blogs Found !"
      ) : (
        post.map((res) => {
          return (
            <div className="py-4" key={res.id}>
              <h2 className="text-bold">{res.title}</h2>
              <h5>
                By {res.author} on {res.category}
              </h5>
              <h6>Posted On {res.date}</h6>
              <p>{res.content}</p>
              {res.tags.map((res, index) => {
                return (
                  <span
                    key={index}
                    className="mr-4 cursor-pointer text-blue-400"
                  >
                    #{res}
                  </span>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blogs;
