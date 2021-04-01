import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapContainer } from './custom-map.styles';

const mapData = {
   center: [55.802796, 37.584640],
   zoom: 14,
};

const coordinate = [55.802796, 37.584640]

const CustomMap = () => (
   <MapContainer>
      <YMaps className='yandexMap'>
         <Map
            defaultState={mapData}
            className='mapContainer'
            style={{ width: '480px', height: '300px' }}
         >
            <Placemark geometry={coordinate} options={{iconLayout:'default#image', iconImageHref: 'pin.svg', iconImageSize: [55, 55], }}/>
         </Map>
      </YMaps>
   </MapContainer>
);

export default CustomMap;