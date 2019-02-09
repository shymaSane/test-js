import React, { Component } from 'react';
import {Consumer} from '../../Context';
import 'react-table/react-table.css';
import Table from './Table'

class EmailTables extends Component {

  render() {
    return (
        <Consumer>
            {value => {
                return(
                  <Table/>
                )
            }}
        </Consumer>
    )
  }
}

export default EmailTables

