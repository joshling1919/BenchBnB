import React from 'react';
import { withRouter } from 'react-router';


class BenchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: parseFloat(props.lat),
      lng: parseFloat(props.lng),
      description: "",
      seating: 0
    };
  }
  createBench(e){
    e.preventDefault();
    let bench = this.state;
    this.props.createBench(bench);
    this.props.router.push({
      pathname: "/"
    });
  }

  updateDescription(e){
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  updateSeating(e){
    e.preventDefault();
    let seatingNum = parseInt(e.target.value);
    this.setState({ seating: seatingNum });
  }

  render() {
    return(
        <form id="bench-form" onSubmit={this.createBench.bind(this)}>
          <h3>Create a Bench!</h3>
          Description <input
              type="text"
              name="description"
              onChange={this.updateDescription.bind(this)}
              >
            </input>
          Number of Seats <input
              type="text"
              name="seating"
              onChange={this.updateSeating.bind(this)}
              >
            </input>
          Latitude <input
              type="text"
              name="lat"
              defaultValue={this.state.lat}
              disabled={true}
              >
            </input>
          Longitude <input
              type="text"
              name="lng"
              defaultValue={this.state.lng}
              disabled={true}
              >
            </input>
            <input type="submit"></input>
        </form>
    );
  }
}

export default withRouter(BenchForm);
