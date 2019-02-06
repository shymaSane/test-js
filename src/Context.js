import React, { Component } from "react";
import data from './model/data.json'


const Context = React.createContext({})

const reducer = (state, action) =>{
    switch(action.type){
        default: 
            return state;    
    }
}

export class Provider extends Component {
    state = {
        tablesData: [],
        columns: [{
            id:0,
            Header:'Address',
            accessor: 'address',
            sortable: false,
            filterable: false
            }, {
            id:1,
            Header:'City',
            accessor: 'city',
            sortable: false 
            }, {
            id: 2,
            Header:'Company',
            accessor: 'company_name',
            sortable: false,
            filterable: false
            }, {
            id:3,
            Header:'Email',
            accessor: 'email',
            sortable: false,
            filterable: false  
            }, {
            id:4,
            Header:'First Name',
            accessor: 'first_name'
            }, {
            id:5,
            Header:'Last Name',
            accessor: 'last_name'  
            }, {
            id:6,
            Header:'Phone1',
            accessor: 'phone1',
            sortable: false,
            filterable: false
            }, {
            id:7,
            Header:'Phone2',
            accessor: 'phone2',
            sortable: false,
            filterable: false
            }, {
            id:8,
            Header:'Postal',
            accessor: 'postal',
            sortable: false,
            filterable: false 
            }, {
            id:9,
            Header:'Province',
            accessor: 'province',
            }, {
            id:10,
            Header:'Website',
            accessor: 'web' ,
            sortable: false,
            filterable: false
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    async componentDidMount () {
        this.setState({
            tablesData: data
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
