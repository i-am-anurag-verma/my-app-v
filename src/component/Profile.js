import React, {useState} from 'react'

const Profile = () => {
  const person1 = {
    name: 'Anurag',
    age: 29
  };
  const person2 = {
    name: 'Shivansh',
    age: 1
  };
  const [person, setPerson] = useState(person1)

  const updateState = () => {
      let nextPerson; 
      if(person.name === 'Anurag'){
        nextPerson = person2;
      } else {
        nextPerson = person1;
      }
      setPerson(nextPerson);
  }
  const age = 'age';  
  return (
    <div style={{color:"#909497"}}>
        <h1>Name {person['name']}</h1>
        <h1>Age {person[age]}</h1>
        <button onClick={updateState} style={{backgroundColor:"aqua"}}>Update</button>
    </div>
  )
}

export default Profile