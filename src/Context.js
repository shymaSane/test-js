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
        dispatch: action => this.setState(state => reducer(state, action))
    }

    async componentDidMount () {
        console.log(data[0])
        
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
