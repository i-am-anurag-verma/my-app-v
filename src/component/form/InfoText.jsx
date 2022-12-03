import React from 'react'

const InfoText = () => {
  React.useEffect(() => {
    console.log('====mounted');
    return () => {
        console.log('====component unmounted')
    }
}, [])  
  return (
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi, fugit incidunt sequi consequuntur fugiat facilis libero placeat ea perspiciatis optio provident harum aperiam doloremque quasi. Accusantium quisquam iste sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, necessitatibus quam voluptatem beatae illum repellat quia quidem amet minus commodi vero delectus eveniet aliquam enim officia ex distinctio ab corrupti corporis incidunt facilis at.
        </p>
    </div>
  )
}

export default InfoText