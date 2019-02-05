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
                    accessor: 'address'
                    }, {
                    Header:'City',
                    accessor: 'city'  
                    }, {
                    Header:'Company',
                    accessor: 'company_name'
                    }, {
                    Header:'Email',
                    accessor: 'email'  
                    }, {
                    Header:'First Name',
                    accessor: 'first_name'
                    }, {
                    Header:'Last Name',
                    accessor: 'last_name'  
                    }, {
                    Header:'Phone1',
                    accessor: 'phone1'  
                    }, {
                    Header:'Phone2',
                    accessor: 'phone2'
                    }, {
                    Header:'Postal',
                    accessor: 'postal'  
                    }, {
                    Header:'Province',
                    accessor: 'province'
                    }, {
                    Header:'Website',
                    accessor: 'web'  
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

