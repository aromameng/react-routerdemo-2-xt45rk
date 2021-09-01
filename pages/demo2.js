import React, { useState, useCallback } from 'react';
class Test extends React.PureComponent {
  render() {
    console.log('Test Render');
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.onClick}>改变文本</button>
      </div>
    );
  }
}
const Parent = () => {
  console.log('Parent Render');
  const [txt, setTxt] = useState(123);
  const [n, setN] = useState(0);
  const onChangeText = useCallback(() => {
    setTxt(333);
  }, []);

  return (
    <div>
      <Test
        text={txt}
        // onClick={() => {
        //   setTxt(333);
        // }}
        onClick={onChangeText}
      />
      <input
        type="number"
        value={n}
        onChange={e => {
          setN(parseInt(e.target.value));
        }}
      />
    </div>
  );
};
const Demo2 = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};
export default Demo2;
