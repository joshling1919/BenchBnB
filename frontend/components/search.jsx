import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, requestBenches, markerHover, lightUpMarker }) => {
  return(
    <div className="container">
      <BenchIndex
        benches={benches}
        markerHover={markerHover}
      />
      <BenchMap
        benches={benches}
        lightUpMarker={lightUpMarker}
        requestBenches={requestBenches}
      />
    </div>
  );
};


export default Search;
