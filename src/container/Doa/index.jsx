import React, { Component } from "react";
import Development from "../../components/development";

class Doa extends Component {
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <React.Fragment><Development onClick={this.goBack.bind(this)} /></React.Fragment>
    ) 
  }
}

export default Doa;
