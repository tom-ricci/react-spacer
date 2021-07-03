import React, {Component} from "react";

export default class Spacer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if(props.x) {
      this.state.style = {width: `${props.x}px`, height: "100%"};
    }else if(props.y) {
      this.state.style = {height: `${props.y}px`, width: "100%"};
    }else{
      this.state.style = {height: "0", width: "0"};
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style={this.state.style}/>
      </React.Fragment>
    );
  }
}