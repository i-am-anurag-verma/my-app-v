import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import USerComments from "../tables/USerComments";
import UserTable from "../tables/UserTable";
import UserToDo from "../tables/UserToDo";
import Button from "./Button";

const Master = () => {
  const [table, setTable] = useState(false);
  const [comment, setComment] = useState(false);
  const [toDo, setToDo] = useState(false);

  useEffect(() => {
    if (table) {
      setComment(false);
      setToDo(false)
    }
  }, [table]);

  useEffect(() => {
    if (comment) {
      setTable(false);
      setToDo(false)
    }
  }, [comment]);

  useEffect(() => {
    if(toDo){
      setTable(false);
      setComment(false);
    }
  }, [toDo])
  

  return (
    <div className="btn-ctr">
        <h1>Table Data</h1>
      <Button onClick={()=>setTable(!table)}>Table</Button>
      <Button onClick={()=>setComment(!comment)} >Comments</Button>
      <Button onClick={()=>setToDo(!toDo)}>ToDo</Button>
      {table && (
        <UserTable/>
      )}
      {comment && (
        <USerComments/>
      )}
       {toDo && (
        <UserToDo/>
    )}
    </div>
    );
};

export default Master;
