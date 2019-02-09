
import React, { Component } from 'react';
import {Consumer} from '../../Context';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom'
import './table.css'

export default class Table extends Component {
  render() {
      const {columns} = this.props
    return (
      <div>
        <Consumer>
            {value => {
                const {tablesData, reorder, columns, columns1} = value;
                return(
                    
                    <div>
                        <Link to="/api">Back to Home Page</Link>
                        {reorder === false? <ReactTable
                            data={tablesData}
                            defaultFilterMethod = {
                                (filter, row) => String(row[filter.id] === filter.value)
                            }
                            columns={columns}
                            filterable
                            defaultPageSize={15}
                            className="-striped -highlight tables"   
                        >
                        </ReactTable>:
                        <ReactTable
                        data={tablesData}
                        defaultFilterMethod = {
                            (filter, row) => String(row[filter.id] === filter.value)
                        }
                        columns={columns1}
                        filterable
                        defaultPageSize={15}
                        className="-striped -highlight tables"   
                    >
                    </ReactTable>
                    }
                        
                   </div>
                )
            }}
        </Consumer>
      </div>
    )
  }
}
