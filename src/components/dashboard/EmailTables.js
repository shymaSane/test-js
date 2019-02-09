import React, { Component } from 'react';
import {Consumer} from '../../Context';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Table from './Table'

class EmailTables extends Component {

  render() {
    return (
        <Consumer>
            {value => {
                const {columns} = value
                return(
                  <Table columns = {columns}/>
                )
            }}
        </Consumer>
    )
  }
}

export default EmailTables

