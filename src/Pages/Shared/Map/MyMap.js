import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {

    const position = [23.795779991134772, 90.3539442815019];

    return (
        <div className='mt-3 mb-3 mx-auto px-40 '>
             <MapContainer 
             center={position} 
             zoom={10} s
             crollWheelZoom={false}
             style={{width:'50vw', height:'50vh'}}
             >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup >
       <p>Mirpur - 1 <br /> Dhaka - 1216, Bangladesh.</p>
      </Popup>
    </Marker>
  </MapContainer>
        </div>
    );
};

export default MyMap;