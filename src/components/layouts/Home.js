import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {Consumer} from '../../Context'

class Home extends Component {

  state={
    emails: "1",
    province:"2"
  }

  showModal = () =>{
    let modal = document.getElementById('tables-modal')
    modal.style.display = "block";
  }

  closeModal = () =>{
    let modal = document.getElementById('tables-modal')
    let errorMsg = document.getElementById('errors')
    modal.style.display = "none";
    errorMsg.style.display = 'none';
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmitData = (dispatch, e) =>{
    e.preventDefault();
    const{emails, province} = this.state;
    let errorMsg = document.getElementById('errors');
    let title = document.getElementById('title')
    if(emails === province){
      errorMsg.style.display = 'block'
      title.style.marginBottom = '20px'
    } else if(emails > province){
      let columns = [
        {
        Header:'Province',
        accessor: 'province',
        },
        {
        Header:'Email',
        accessor: 'email',
        }
    ]

    localStorage.setItem('columns', JSON.stringify(columns));

    dispatch({type: "UPDATE_TABLES", payload: columns})

    this.props.history.push('/api/tables');

    } else {
      let columns = [
        {
          Header:'Email',
          accessor: 'email',
           },
          {
          Header:'Province',
          accessor: 'province',
          },{
            Header: 'EMail Service',
            accessor: 'email',
            Cell: v => {
              let value = v.value
              let index1 = value.indexOf('@')+1
              let index2 = value.indexOf('.', index1)
              let cell = value.substring(index1, index2)
              return cell
            },
          }
    ]

    localStorage.setItem('columns', JSON.stringify(columns));

    dispatch({type: "UPDATE_TABLES", payload: columns})

    this.props.history.push('/api/tables');
    }
  }

  render(){
    return(

    <Consumer>
      {value =>{
        const {dispatch} = value
        return(
          <div className="container">
            <div className="cover-text">
              <div className="text-container">
                  <h4 className="text1">Inspire your data</h4>
                  <h1 className="text2"><span>W</span>elcome <span>t</span>o <span>S</span>howTables</h1>
                  <h3 className="text3">Start with us</h3>
              </div>
              <div className="button-container">
                  <button className="btn-tables" onClick={this.showModal}>Show Tables</button>
                  <button className="btn-emails"><Link to='/api/emails' className="nav-link">Emails Data</Link> </button>
              </div>
            </div>
            <div id="tables-modal" className="modal">
              <div className="modal-content">
                
                <h2 className="modal-title" id="title">Select columns order <span className="close" onClick={this.closeModal}>&times;</span></h2>
                
                <form onSubmit = {this.onSubmitData.bind(this, dispatch)}>
                <p className="error-msg" id="errors">Please select different columns!</p>
                  <label className="columns-label">
                  Emails column:
                    <select className="select-box" name ="emails" value={this.state.emails} onChange={this.handleChange}>
                      <option value="1" > 1 </option>
                      <option value="2"> 2 </option>
                    </select>
                  </label>
                  <label className="columns-label">
                  Province column:
                    <select className="select-box" name ="province" value={this.state.province} onChange={this.handleChange}>
                      <option value="1"> 1 </option>
                      <option value="2" > 2 </option>
                    </select>
                  </label>
                  <div className="button-warrper"><input type="submit" value="OK" className="ok-button" /></div>
                </form>
              </div>
            </div>
          </div>
        )
      }}
    </Consumer>
    )
  }
  
}

export default Home