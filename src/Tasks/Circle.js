import React from 'react'

function Circlesss(radius) {

    return Math.PI * Math.pow(radius, 2);

}
const Circle = (props) => {
    const [radius, setRadius] = React.useState(props);

    const Area = Circlesss(radius);
    return (
        <div>
            <p>
                Radius:
                <input name='radius' onChange={(e) => setRadius(parseInt(e.target.value))} />
            </p>
            <div>
            </div>
            <p>Area of circle : {Area}</p>
            {/* <p>Perimeter of circle : {Perimeter}</p> */}
        </div>
    )
}

export default Circle