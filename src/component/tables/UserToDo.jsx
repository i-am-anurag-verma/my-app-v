import React from "react";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

function getTotalRecord(noOFRecords, perPage) {
  if (perPage === 0 || noOFRecords === 0) {
    return 1;
  }
  const pageSize = Math.ceil(noOFRecords / perPage);
  return pageSize;
}

function pageRecords(records, currentPage, perPage){
    const from = (currentPage-1)*perPage;
    const to = from+perPage;
    return records.slice(from, to)

}

const PER_PAGE = 10

const UserToDo = () => {
  const [toDo, setToDo] = useState([]);
  const [visiblePage, setVisiblePage] = useState(1)
  const pageData = pageRecords(toDo, visiblePage, PER_PAGE)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
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
      <Pagination currentPage={visiblePage} totalPage={getTotalRecord(toDo.length, PER_PAGE)} onClick={setVisiblePage} />
    </div>
  );
};

export default UserToDo;
