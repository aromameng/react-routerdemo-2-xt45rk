import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import moment from 'moment';
import _ from 'lodash';

class Home extends React.Component {
  render() {
    const curMonth = moment().month();
    const test = '2021-03-23 22:05:16',
      testObj = moment(test, 'YYYY-MM-DD');
    let year = testObj.year(),
      date = testObj.date(),
      month = testObj.month(),
      maxDate = moment()
        .year(year)
        .month(curMonth)
        .daysInMonth();

    if (curMonth < month) {
      year++;
    }
    if (date > maxDate) {
      date = maxDate;
    }

    const cur = moment()
      .year(year)
      .month(curMonth)
      .date(date);
    console.log(cur.format('YYYY-MM-DD'));

    return (
      <div>
        <div>HOME</div>
        <Button type="primary">button</Button>
        <Input
          onChange={e => {
            _.debounce(() => {
              console.log(e.target.value);
            }, 500);
          }}
        />
        <div>
          <Link to="/test">Goto Page test</Link>
          <br />
          <Link to="/new">Goto Page new</Link>
          <br />
          <Link to="/batched">Goto Page batched</Link>
          <br />
          <Link to="/virtualList">Goto Page virtualList</Link>
        </div>
      </div>
    );
  }
}

export default Home;
