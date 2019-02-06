import React, { Component } from 'react';
import {Consumer} from '../../Context';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class Tables extends Component {
  render() {
    return (
        <Consumer>
            
            {value => {
                const {tablesData} = value;
                const {columns} = value
                return(
                    <div>
                        <div>hello</div>
                        <ReactTable
                            data={tablesData}
                            columns={columns}
                            filterable
                            defaultPageSize={15}
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

