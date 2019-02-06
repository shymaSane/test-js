import React, { Component } from "react";
import data from './model/data.json'


const Context = React.createContext({})

const reducer = (state, action) =>{
    switch(action.type){
        case 'UPDATE_TABLES':
            console.log(action.payload)
            return {
                ...state,
                columns: action.payload
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
            Header:'Email',
            accessor: 'email',
            sortable: false,
            filterable: false  
             },
            {
            Header:'Province',
            accessor: 'province',
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
