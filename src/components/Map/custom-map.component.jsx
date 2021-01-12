import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapContainer } from './custom-map.styles';

const mapData = {
   center: [55.802796, 37.584640],
   zoom: 14,
};

const coordinates = [
   [55.802796, 37.584640]
];

const CustomMap = () => (
   <MapContainer>
      <YMaps className='yandexMap'>
         <Map
            defaultState={mapData}
            className='mapContainer'
            style={{ width: '480px', height: '300px' }}
         >
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
         </Map>
      </YMaps>
   </MapContainer>
);

export default CustomMap;