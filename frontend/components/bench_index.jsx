import React from 'react';
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component{
  componentDidMount(){
    this.props.requestBenches();
  }

  render(){
    let benchesArray;
    // if (this.props.benches) {
    // }
    benchesArray = Object.keys(this.props.benches).map(benchId => (
      this.props.benches[benchId]
    ));
    let benchList = benchesArray.map(bench => {
      return <BenchIndexItem bench={bench} />;
    });

    return(
      <ul>
        {benchList}
      </ul>
    );
  }
}

export default BenchIndex;
