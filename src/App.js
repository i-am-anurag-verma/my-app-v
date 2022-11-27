import React from 'react';
import Profile from './component/Profile';
import Circle from './Tasks/Circle';
import ObjectPropertiesDelete from './Tasks/ObjectPropertiesDelete';
import ObjectPropertiesList from './Tasks/ObjectPropertiesList';
import RegistrationForm from './Tasks/RegistrationForm';
import VolumeOfCylinder from './Tasks/VolumeOfCylinder';

const App = () => {
    return (
        <div style={{"text-align": "center", color:"#873600"}}>
            <Profile />
            <ObjectPropertiesList />
            <ObjectPropertiesDelete />
            {/* //height and radius are props of VolumeOfCylinder component */}
            <VolumeOfCylinder height={3} radius={10} />
            {/* <Circle  radius = {4}/> */}
            <RegistrationForm />

        </div>
    )
}

export default App