import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import "./table.css";

function getPageCount(noOfRecord, perPage) {
  if (perPage === 0 || noOfRecord === 0) {
    return 1;
  }

  const pageSize = Math.ceil(noOfRecord / perPage);
  return pageSize;
}

function getPageRecord(records, currentPage, perPage) {
  const from = (currentPage - 1) * perPage;
  const to = from + perPage;
  return records.slice(from, to);
}

const PER_PAGE = 20;

const USerComments = () => {
  const [isData, setIsData] = useState([]);
  const [showPage, setShowPage] = useState(1);
  const isVisibleData = getPageRecord(isData, showPage,  PER_PAGE);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((val) => {
        setIsData(val);
      });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>PostId</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {isVisibleData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.postId}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </table>
      <Pagination currentPage={showPage} totalPage={getPageCount(isData.length, PER_PAGE)} onClick={setShowPage} />
    </div>
  );
};

export default USerComments;
