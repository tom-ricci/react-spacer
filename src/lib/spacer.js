import React, {Component} from "react";

export default class Spacer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {}
    };
    if(props.x) {
      this.state.style.width = props.x;
    }else{
      this.state.style.width = "0";
    }
    if(props.y) {
      this.state.style.height = props.y;
    }else{
      this.state.style.height = "0";
    }
  }

  render() {
    return (
      <div style={this.state.style}/>
    );
  }
}