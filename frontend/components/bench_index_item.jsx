import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <li>
    Description: {bench.description}
    Latitude: {bench.lat}
    Longitude: {bench.lng}
  </li>
);

export default BenchIndexItem;
