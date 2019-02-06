import React, { Component } from 'react';
import {Consumer} from '../../Context';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import matchSorter from 'match-sorter'

class Tables extends Component {
    
  render() {
    return (
        <Consumer>
            
            {value => {
                const {tablesData} = value;
                const {columns} = value
                const filterEmail = ['Gmail', 'Yahoo', 'AOL', 'other']
                return(
                    <div>
                        <ReactTable
                            data={tablesData}
                            defaultFilterMethod = {
                                (filter, row) => String(row[filter.id] === filter.value)
                            }
                            columns={[
                                {
                                  Header:'Email',
                                  accessor: 'email',
                                  filterMethod: (filter, rows) =>{
                                    let newFilter = new RegExp('.+?('+ filter.value +').+', 'g')
                                    console.log(rows)
                                    return matchSorter(rows, filter.value, { keys: ["email"] })
                                  }
                                    ,
                                    filterAll: true
                                  },
                                  {
                                  Header:'Province',
                                  accessor: 'province',
                                  filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["province"] }),
                                    filterAll: true
                                  },
                                  {
                                      Header:"Email Service",

                                  }
                            ]}
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

