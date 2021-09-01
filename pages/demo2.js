import React from 'react';

class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  shouldCompoentUpdate(nextProps, nextState) {
    // 当props 和state 值均没有改变时候，让render不渲染
    if (nextPorps.sum === this.props.sum && nextState.num === this.state.num) {
      return false;
    }
    // 其他情况设置成允许渲染
    return ture;
  }
  render() {
    return (
      <div>
        <span>{this.state.num}</span>
        <span>{this.props.sum}</span>
      </div>
    );
  }
}

export default Sum;

// 会自动进行props 和 sate 的浅比较
class Sum extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  render() {
    return (
      <div>
        <span>{this.state.num}</span>
        <span>{this.props.sum}</span>
      </div>
    );
  }
}



function Sum (props){
  return (
        <div>sum = {props.y + props.x}</div>
  )
}
export default React.memo(Sum)


