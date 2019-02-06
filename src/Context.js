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
        columns:JSON.parse(localStorage.getItem('columns')),
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount () {
        this.setState({
            tablesData: data,
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
