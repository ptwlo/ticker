import React, {Component} from 'react';
import './myStyle.css';

class Ticker extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  // LifeCycle methods
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        count: this.state.count + 1
      })

    }, 1000);

  }

  shouldComponentUpdate(nextProps, nextState){
    // this is where we check if the condition is true
    // only if it is true will it rerender
    if(nextState.count % 3 === 0 ){
      return true;
    }else { return false;}
  }

  // This is a custom method
  reset = ()=>{
    //this.state.count = 0;
   this.setState({
     count: this.state.count = 0,
   });
  }
  render(){
    return(
      <>
        <p>The ticker number is: <span>{this.state.count}</span></p>
        <button onCLick={this.state.reset} type="button">Reset Counter</button>
      </>
    )
  }
}


export default Ticker;
