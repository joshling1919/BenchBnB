import React from 'react';
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component{

  render(){
    let benchesArray = Object.keys(this.props.benches).map(benchId => (
      this.props.benches[benchId]
    ));
    let benchList = benchesArray.map(bench => {
      return <BenchIndexItem key={bench.lat + bench.lng} bench={bench} />;
    });

    return(
      <ul className="bench-index">
        {benchList}
      </ul>
    );
  }
}

export default BenchIndex;
