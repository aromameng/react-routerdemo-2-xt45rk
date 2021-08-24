import * as React from 'react';
import { Link } from 'react-router-dom';

class CommonLayout extends React.Component {
  render() {
    return (
      <div>
        <header>头部</header>
        <div>{this.props.children}</div>
        <br />
        <br />
        <footer style={{ marginTop: '35px' }}>底部</footer>
        <Link to={'/home'}>返回首页</Link>
      </div>
    );
  }
}

export default CommonLayout;
