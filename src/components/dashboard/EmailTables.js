import React, { Component } from 'react';
import {Consumer} from '../../Context';
import 'react-table/react-table.css';
import Table from './Table'

class EmailTables extends Component {

  render() {
    return (
        <Consumer>
            {value => {
                const{reorder, columns, columns1} = value
                return(
                    <div>
                    {reorder === false? <Table columns={columns}/>: <Table columns={columns1}/>}
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

export default EmailTables

