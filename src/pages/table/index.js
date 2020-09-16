import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

export class index extends Component {
  constructor(props) {
    super(props)
  }

  rows = [
    "first row",
    "second row",
    "third row"
    // .... and more
  ];

  render() {
    return (
      <div>
        <Table
          rowHeight={100}
          rowsCount={this.rows.length}
          width={1000}
          height={300}
          headerHeight={50}>
          <Column
            header={<Cell>Col 1</Cell>}
            cell={<Cell>Column 1 static content</Cell>}
            width={200}
          />
          <Column
            header={<Cell>Col 2</Cell>}
            cell={<Cell>Column 2 static content</Cell>}
            width={100}
          />
          <Column
            header={<Cell>Col 3</Cell>}
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                Data for column 3: {this.rows[rowIndex]}
              </Cell>
            )}
            width={200}
          />
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
