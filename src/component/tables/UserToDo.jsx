import React from 'react'
import { useState, useEffect } from 'react'

const UserToDo = () => {

    const [toDo, setToDo ] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>response.json())
        .then((data)=>{
            setToDo(data)
        })
    }, [])
    

  return (
    <div>
        <table>
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
            {toDo.map((item, index)=>{
                return(
                    <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? 'yes' : 'no'}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default UserToDo