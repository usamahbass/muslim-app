import React, { Component } from "react";
import "./Dzikir.scss";
import Development from "../../components/development";

class Dzikir extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <React.Fragment>
        <Development onClick={this.goBack.bind(this)} />
      </React.Fragment>
    );
  }
}

export default Dzikir;
