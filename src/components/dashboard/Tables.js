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
                const columns = [{
                    Header:'Address',
                    accessor: 'address',
                    sortable: false,
                    filterable: false
                    }, {
                    Header:'City',
                    accessor: 'city',
                    sortable: false 
                    }, {
                    Header:'Company',
                    accessor: 'company_name',
                    sortable: false,
                    filterable: false
                    }, {
                    Header:'Email',
                    accessor: 'email',
                    sortable: false,
                    filterable: false  
                    }, {
                    Header:'First Name',
                    accessor: 'first_name'
                    }, {
                    Header:'Last Name',
                    accessor: 'last_name'  
                    }, {
                    Header:'Phone1',
                    accessor: 'phone1',
                    sortable: false,
                    filterable: false
                    }, {
                    Header:'Phone2',
                    accessor: 'phone2',
                    sortable: false,
                    filterable: false
                    }, {
                    Header:'Postal',
                    accessor: 'postal',
                    sortable: false,
                    filterable: false 
                    }, {
                    Header:'Province',
                    accessor: 'province'
                    }, {
                    Header:'Website',
                    accessor: 'web' ,
                    sortable: false,
                    filterable: false
                    }
                ]
                return(
                   <ReactTable
                    data={tablesData}
                    columns={columns}
                    filterable
                   >

                   </ReactTable>
                )
            }}
        </Consumer>
    )
  }
}

export default Tables

