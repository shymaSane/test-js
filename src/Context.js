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
        case 'REORDER_STATE':
            localStorage.clear()
            return{
                ...state,
                
            }
          
           
        default: 
            return state;    
    }
}

export class Provider extends Component {
    
    state = {
        tablesData: [],
        columns: [
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
        Allcolumns:[{
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
        this.setState({
            tablesData:data
        })
        
        
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
