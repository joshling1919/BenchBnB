import React from 'react';
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component{
  componentWillMount(){
    this.props.requestBenches();
  }

  render(){
    let benchesArray = Object.keys(this.props.benches).map(benchId => (
      this.props.benches[benchId]
    ));
    let benchList = benchesArray.map(bench => {
      return <BenchIndexItem key={bench.lat + bench.lng} bench={bench} />;
    });

    return(
      <ul>
        {benchList}
      </ul>
    );
  }
}

export default BenchIndex;
