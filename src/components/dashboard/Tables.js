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
                    sortable: false
                    }, {
                    Header:'City',
                    accessor: 'city',
                    sortable: false 
                    }, {
                    Header:'Company',
                    accessor: 'company_name',
                    sortable: false
                    }, {
                    Header:'Email',
                    accessor: 'email',
                    sortable: false  
                    }, {
                    Header:'First Name',
                    accessor: 'first_name'
                    }, {
                    Header:'Last Name',
                    accessor: 'last_name'  
                    }, {
                    Header:'Phone1',
                    accessor: 'phone1',
                    sortable: false 
                    }, {
                    Header:'Phone2',
                    accessor: 'phone2',
                    sortable: false
                    }, {
                    Header:'Postal',
                    accessor: 'postal',
                    sortable: false 
                    }, {
                    Header:'Province',
                    accessor: 'province'
                    }, {
                    Header:'Website',
                    accessor: 'web' ,
                    sortable: false
                    }
                ]
                return(
                   <ReactTable
                    data={tablesData}
                    columns={columns}
                   >

                   </ReactTable>
                )
            }}
        </Consumer>
    )
  }
}

export default Tables

