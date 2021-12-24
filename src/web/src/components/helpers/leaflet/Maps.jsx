import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

//lat y lon
const Maps = ({ lat=42.5041539170675, lon=12.6463610364431}) => {

    return (
        <div className='maps--search'>
            <MapContainer center={[lat, lon]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lon]}>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Maps
