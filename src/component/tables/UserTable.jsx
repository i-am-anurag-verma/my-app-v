import React, { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import "./table.css";

function getTotalPageCount(noOfRecord, perPage) {
  if (perPage === 0 || noOfRecord === 0) {
    return 1;
  }

  const pageSize = Math.ceil(noOfRecord / perPage);
  return pageSize;
}

function getPageRecords(records, currentPage, perPage) {
  const from = (currentPage - 1) * perPage;
  const to = from + perPage;
  return records.slice(from, to);
}

const PER_PAGE = 5;

const UserTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const visibleData = getPageRecords(data, currentPage, PER_PAGE)

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="container">
      <table className="control_table">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone No.</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
        {visibleData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>{item.company.name}</td>
            </tr>
          );
        })}
      </table>
      <Pagination currentPage={currentPage} totalPage={getTotalPageCount(data.length, PER_PAGE)} onClick={setCurrentPage} />
    </div>
  );
};

export default UserTable;
