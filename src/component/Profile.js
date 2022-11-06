import React, {useState} from 'react'

const Profile = () => {
  const [person, setPerson] = useState({name:'Anurag', age:29})

  const updateState = () => {
      setPerson({
        name:'Shivansh',
        age: 1.2
      })
  }

  return (
    <div>
        <h1>Name {person.name}</h1>
        <h1>Age {person.age}</h1>
        <button onClick={updateState}>Update</button>
    </div>
  )
}

export default Profile