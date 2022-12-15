import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './table.css'

const USerComments = () => {
  const [isData, setIsData] = useState([]);

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
        {isData.map((item, index) => {
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
    </div>
  );
};

export default USerComments;
