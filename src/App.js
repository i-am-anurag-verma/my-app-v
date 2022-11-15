import React from 'react';
import Profile from './component/Profile';
import Circle from './Tasks/Circle';
import ObjectPropertiesDelete from './Tasks/ObjectPropertiesDelete';
import ObjectPropertiesList from './Tasks/ObjectPropertiesList';
import VolumeOfCylinder from './Tasks/VolumeOfCylinder';

const App = () => {
    return (
        <div>
            <Profile />
            <ObjectPropertiesList />
            <ObjectPropertiesDelete />
            {/* //height and radius are props of VolumeOfCylinder component */}
            <VolumeOfCylinder height={3} radius={10} />
            <Circle  radius = {4}/>

        </div>
    )
}

export default App