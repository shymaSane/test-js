import React, { Component } from "react";
import data from './model/data.json';
import matchSorter from 'match-sorter'


const Context = React.createContext({})

const reducer = (state, action) =>{
    switch(action.type){
        case 'UPDATE_TABLES':
            return {
                ...state,
                columns: [...state.columns] = [state.columns[0], state.columns[2], state.columns[1], state.columns[3]]
            }
        default: 
            return state;    
    }
}

export class Provider extends Component {
    state = {
        tablesData: [],
        columns:[
            {
            Header: "",
            id: "row",
            maxWidth: 50,
            filterable: false,
            Cell: (row) => {
                return <div>{row.viewIndex+1}</div>;
            }
            },
            
            {
              Header:'Email',
              accessor: 'email',
              filterable: false
            },
            {
            Header:'Province',
            accessor: 'province',
            filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["province"] }),
            filterAll: true,
            
            },{
            Header: 'EMail Service',
            accessor: 'service',
            filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {threshold: matchSorter.rankings.EQUAL, keys: ["service"] }),
            filterAll: true,
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    makeData = () => {

        return data.map((row) => {
            let value = row.email
            let index1 = value.indexOf('@')+1
            let index2 = value.indexOf('.', index1)
            let cell = value.substring(index1, index2)
            if(cell === 'gmail' || cell === 'yahoo' || cell === 'aol'){
                row['service'] = cell
            } else {
                row['service'] = 'other'
            }
            
            return row
        })
    }

    componentDidMount () {
        let data = this.makeData()
        let columnsIndex = JSON.parse(localStorage.getItem('columns'))
        // if(columnsIndex !== null){
        //     const {columns} = this.state
        //     [columns[1], columns[2]] = [columns[1], columns[2]]
        // }
        if(data !== undefined || columnsIndex !== null){
            this.setState({
                tablesData: data,
                columns: [...this.state.columns] = [this.state.columns[0], this.state.columns[2], this.state.columns[1], this.state.columns[3]]
            })
        }
        
        
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider> 
        )
    }

}

export const Consumer = Context.Consumer;
