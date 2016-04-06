import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

// Table data as a list of array.
var rows = [
	[1, "Citizen Kane","1","1941"],
];

function rowGetter(rowIndex) {
  return rows[rowIndex];
}

function rowGetter(rowIndex) {
  return rows[rowIndex];
}

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Luke Skywalker', hair_color: 'blond', eye_color:'blue'},
        {name: 'Luke Skywalker', hair_color: 'blond', eye_color:'blue'},
        {name: 'Luke Skywalker', hair_color: 'blond', eye_color:'blue'},
        {name: 'Luke Skywalker', hair_color: 'blond', eye_color:'blue'},
      ]
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].name}
            </Cell>
          )}
          width={200}
        />

        <Column
          header={<Cell>Hair Color</Cell>}
          width={100}
          cell={props => (
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].hair_color}
            </Cell>
          )}
        />

        <Column
          header={<Cell>Eye Color</Cell>}
          width={100}
          cell={props => (
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].eye_color}
            </Cell>
          )}
        />
      </Table>
    );
  }
}


export default DataTable;
