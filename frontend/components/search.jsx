import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, updateBounds }) => {
  return(
    <div className="container">
      <BenchIndex
        benches={benches}
      />
      <BenchMap
        benches={benches}
        updateBounds={updateBounds}
      />
    </div>
  );
};


export default Search;
