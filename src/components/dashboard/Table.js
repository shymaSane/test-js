
import React, { Component } from 'react';
import {Consumer} from '../../Context';
import ReactTable from 'react-table';

export default class Table extends Component {
  render() {
      const {columns} = this.props
    return (
      <div>
        <Consumer>
            {value => {
                const {tablesData} = value;
                return(
                    <div>
                        <ReactTable
                            data={tablesData}
                            defaultFilterMethod = {
                                (filter, row) => String(row[filter.id] === filter.value)
                            }
                            columns={columns}
                            filterable
                            defaultPageSize={15}
                            className="-striped -highlight"
                        >
                           
                        </ReactTable>
                   </div>
                )
            }}
        </Consumer>
      </div>
    )
  }
}
