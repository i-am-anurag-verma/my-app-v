import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import USerComments from "../tables/USerComments";
import UserTable from "../tables/UserTable";
import UserToDo from "../tables/UserToDo";
import Button from "./Button";

const Master = () => {
  const [display, setDisplay] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (display) {
      setIsDisplay(false);
    }
  }, [display]);

  useEffect(() => {
    if (isDisplay) {
      setDisplay(false);
    }
  }, [isDisplay]);

  useEffect(() => {
    if(isVisible){
        setIsDisplay(false);
        setDisplay(false);
    }
  }, [isVisible])
  

  return (
    <div className="btn-ctr">
        <h1>Table Data</h1>
      <Button onClick={()=>setDisplay(!display)}>Table</Button>
      <Button onClick={()=>setIsDisplay(!isDisplay)} >Comments</Button>
      <Button onClick={()=>setIsVisible(!isVisible)}>ToDo</Button>
      {display && (
        <UserTable/>
      )}
      {isDisplay && (
        <USerComments/>
      )}
       {isVisible && (
        <UserToDo/>
    )}
    </div>
    );
};

export default Master;
