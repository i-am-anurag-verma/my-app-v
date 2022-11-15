import React from 'react'

function cylinder(height, radius){

  return Math.PI * Math.pow(radius,2) * height;
}

const VolumeOfCylinder = (props) => {

  
  const [height, setHeight] = React.useState(props.height);
  const [radius, setRadius] = React.useState(props.radius);
  

  const volume = cylinder(height, radius);

  
  return (
    <div>
        <div>
          <p>
            Height:
            <input name='height' onChange={(e) => {
                console.log(e)
                  setHeight(parseInt(e.target.value))
              }
            }  />
          </p>
          <p>
            Radius: 
            <input name='radius' onChange={(e) => setRadius(parseInt(e.target.value))}/>
          </p>
        </div>
        <p>Area of cylinder: {volume}</p>
    </div>
  )
}

export default VolumeOfCylinder