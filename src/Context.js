import React, { Component } from "react";
import data from './model/data.json'


const Context = React.createContext({})

const reducer = (state, action) =>{
    switch(action.type){
        case 'UPDATE_TABLES':
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

    makeData = () => {

        return data.map((row) => {
            let value = row.email
            let index1 = value.indexOf('@')+1
            let index2 = value.indexOf('.', index1)
            let cell = value.substring(index1, index2)
            row['service'] = cell
            return row
        })
    }

    componentDidMount () {
        let data = this.makeData()
        if(data !== undefined){
            this.setState({
                tablesData: data,
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
