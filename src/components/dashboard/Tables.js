import React, { Component } from 'react'
import {Consumer} from '../../Context';
import Table from '../dashboard/Table'

export default class Tables extends Component {
  render() {
    return (
        <Consumer>
            {value => {
                const {Allcolumns} = value
                return(
                  <Table columns = {Allcolumns}/>
                )
            }}
        </Consumer>
    )
  }
}
