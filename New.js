import * as React from 'react';
import { Link } from 'react-router-dom';
import DataGrid from 'react-data-grid';
// import { Button } from 'antd';
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [{ value: 1, hint: 'Valid' }, { value: 3, hint: 'Not valid' }],
        [{ value: 2 }, { value: 4 }]
      ]
    };
  }
  render() {
    const columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' }
    ];

    const rows = [{ id: 0, title: 'Example' }, { id: 1, title: 'Demo' }];

    return (
      <div>
        <div>New</div>
        {/* <DataGrid columns={columns} rows={rows} /> */}
        <ReactDataSheet
          data={this.state.grid}
          valueRenderer={cell => cell.value}
          onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row]);
            changes.forEach(({ cell, row, col, value }) => {
              grid[row][col] = { ...grid[row][col], value };
            });
            this.setState({ grid });
          }}
        />
        <div>
          <Link to="/home">首页</Link>
        </div>
      </div>
    );
  }
}

export default New;
