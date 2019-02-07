import React, { Component } from 'react';
import {Consumer} from '../../Context';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import matchSorter from 'match-sorter'

class Tables extends Component {
    customOptionsFilter
  render() {
    return (
        <Consumer>
            {value => {
                const {tablesData} = value;
                const {columns} = value
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
                            // pivotBy={['service']}
                        >
                           
                        </ReactTable>
                   </div>
                )
            }}
        </Consumer>
    )
  }
}

export default Tables

