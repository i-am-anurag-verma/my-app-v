import React, { useEffect } from "react";
import { useState } from "react";
import "./table.css";

const UserTable = () => {
  const [data, setData] = useState([]);

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
        {data.map((item, index) => {
            console.log("====>",item)
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
    </div>
  );
};

export default UserTable;
