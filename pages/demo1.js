import React from 'react';

class Demo1 extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    this.onClickHandler = this.onClickHandler.bind(this);
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  onClickHandler() {
    console.log('onClickHandler');
    this.forceUpdate();
  }

  render() {
    console.log('render');
    return <button onClick={this.onClickHandler}> click here </button>;
  }
}

export default Demo1;
