import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import "./table.css";
import {getTotalPageCount, getPageRecords} from './queries'
import { USER_COMMENTS_PER_PAGE } from "./constants";
import { getData } from "./services";
import { APIS } from "./constants";


const USerComments = () => {
  const [isData, setIsData] = useState([]);
  const [showPage, setShowPage] = useState(1);
  const isVisibleData = getPageRecords(isData, showPage, USER_COMMENTS_PER_PAGE);

  useEffect(() => {
      getData(APIS.comments)
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
      <Pagination currentPage={showPage} totalPage={getTotalPageCount(isData.length, USER_COMMENTS_PER_PAGE)} onClick={setShowPage} />
    </div>
  );
};

export default USerComments;
