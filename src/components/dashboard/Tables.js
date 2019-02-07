import React, { Component } from 'react';
import {Consumer} from '../../Context';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class Tables extends Component {
    
  render() {
    return (
        <Consumer>
            {value => {
                console.log(JSON.parse(localStorage.getItem('columns')))
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
                            className="-striped -highlight"
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

