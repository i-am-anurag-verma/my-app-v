import React from 'react';
import Home from './component/form/Home';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Circle from './Tasks/Circle';
import ObjectPropertiesDelete from './Tasks/ObjectPropertiesDelete';
import ObjectPropertiesList from './Tasks/ObjectPropertiesList';
import RegistrationForm from './Tasks/RegistrationForm';
import VolumeOfCylinder from './Tasks/VolumeOfCylinder';

const App = () => {
    return (
        <div>
            
            
            {/* <Profile /> */}
            {/* <ObjectPropertiesList /> */}
            {/* <ObjectPropertiesDelete /> */}
            {/* //height and radius are props of VolumeOfCylinder component */}
            {/* <VolumeOfCylinder height={3} radius={10} /> */}
            {/* <Circle  radius = {4}/> */}
            <RegistrationForm />
            <Home/>
            


        </div>
    )
}

export default App