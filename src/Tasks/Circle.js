import React from 'react'

function Circless(r) {

    this.radius = r;

    return {
        area: () => {
            return Math.PI * Math.pow(this.radius, 2)
        },
        perimeter: () => {
            return 2 * Math.PI * this.radius
        },

    };

}
const Circle = (props) => {
    const [radius, setRadius] = React.useState(props.radius);


    const Area = Circless(radius);
    return (
        <div>
            <button type="button" style={{ backgroundColor: "red" }}>Click me</button>
            <p>
                Radius:
                <input name='radius' onChange={(e) => setRadius(parseInt(e.target.value))} />
            </p>
            <p>
                Radius:
                <input name='radius' onChange={(e) => setRadius(parseInt(e.target.value))} />
            </p>
            <div>
            </div>
            <p>Area of circle : {Area}</p>
        </div>
    )
}

export default Circle