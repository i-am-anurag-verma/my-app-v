import React from 'react'

const Item = (props) => {
  return (<li>{props.item} : {props.value}</li>)
}

const ObjectPropertiesDelete = () => {
    const myObj = {
        name: "Ramesh",
        rollNumber: 1234,
        class: "B",
        add: "Mumbai"
    }
    delete myObj.rollNumber
    const arr = [];
    for(let x in myObj){
        arr.push(x);
    }
    return (
      <div>
          <ol>
              {arr.map((item, index) => {
                  return <Item item={item} key={index} value= {myObj[item]}/>
              })}
          </ol>
      </div>
    )
}

export default ObjectPropertiesDelete