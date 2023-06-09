import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Paignation = () => {
  const { handlePageChange, page ,totalPages } = useContext(AppContext);
  console.log(page, "page");

  return (
    <div className="pagination flex items-center justify-between">
   <div>
   {page > 1 && (
        <button onClick={() => handlePageChange(page - 1)}>Previous</button>
      )}

      {page < totalPages && (
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      )}
   </div>
   <div>
    <h4>Page {page} of {totalPages}</h4>
   </div>
    </div>
  );
};

export default Paignation;
