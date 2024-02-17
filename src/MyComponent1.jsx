import { useState } from 'react'
export default class MyComponent1 extends React.Component{
  constructor(props) {
    super(props);
    //init all state variables inside this.state object
    this.state = { count1: 0 };
  }
  incrementCount = () => {
    this.setState({ count1: this.state.count1 + 1 });
  }
  render() {
    return (
      <div>
        {this.state.count1}
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}