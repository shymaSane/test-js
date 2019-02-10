
import React, { Component } from 'react';
import {Consumer} from '../../Context';
import ReactTable from 'react-table';
import './table.css'

export default class Table extends Component {
    
  render() {
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
                            columns={this.props.columns}
                            filterable
                            defaultPageSize={15}
                            className="-striped -highlight tables"   
                        >
                        </ReactTable>:
                   </div>
                )
            }}
        </Consumer>
      </div>
    )
  }
}
