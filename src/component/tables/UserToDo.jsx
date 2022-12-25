import React from "react";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import {getTotalPageCount, getPageRecords} from './queries'
import { getData } from "./services";
import { APIS } from "./constants";
import { USER_TODO_PER_PAGE } from "./constants";



const UserToDo = () => {
  const [toDo, setToDo] = useState([]);
  const [visiblePage, setVisiblePage] = useState(1)
  const pageData = getPageRecords(toDo, visiblePage, USER_TODO_PER_PAGE)

  useEffect(() => {
    getData(APIS.todo)
      .then((data) => {
        setToDo(data);
      });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
        {pageData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "yes" : "no"}</td>
            </tr>
          );
        })}
      </table>
      <Pagination currentPage={visiblePage} totalPage={getTotalPageCount(toDo.length, USER_TODO_PER_PAGE)} onClick={setVisiblePage} />
    </div>
  );
};

export default UserToDo;
