import React from 'react';

const Item = (props) => {
    return (<li>{props.item}</li>)
}

const ObjectPropertiesList = () => {
    const obj = {
        name:'Ram',
        rollNumber:123,
        class: 'B',
        age: 24
    };
    const arr = [];
    for(let x in obj){
        arr.push(x);
    }
  return (
    <div className='my-1'>
        <h2>Properties List</h2>
        <ol>
            {arr.map((item, index) => {
                return <Item item={item} key={index}/>
            })}
        </ol>
    </div>
  )
}

export default ObjectPropertiesList;

