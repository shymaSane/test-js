import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component {

  state={
    emails: "",
    province:""
  }

  showModal = () =>{
    let modal = document.getElementById('tables-modal')
    modal.style.display = "block";
  }

  closeModal = () =>{
    let modal = document.getElementById('tables-modal')
    modal.style.display = "none";
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
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
            <h2 className="modal-title">Select columns order <span class="close" onClick={this.closeModal}>&times;</span></h2>
            
            <form>
              <label className="columns-label" onSubmit={this.handleSubmit}>
              Emails column:
                <select className="select-box" name ="emails" value={this.state.value} onChange={this.handleChange}>
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                  <option value="6"> 6 </option>
                  <option value="7"> 7 </option>
                  <option value="8"> 8 </option>
                  <option value="9"> 9 </option>
                  <option value="10"> 10 </option>
                  <option value="11"> 11 </option>
                </select>
              </label>
              <label onSubmit={this.handleSubmit} className="columns-label">
              Province column:
                <select className="select-box" name ="province" value={this.state.value} onChange={this.handleChange}>
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                  <option value="3"> 3 </option>
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>
                  <option value="6"> 6 </option>
                  <option value="7"> 7 </option>
                  <option value="8"> 8 </option>
                  <option value="9"> 9 </option>
                  <option value="10"> 10 </option>
                  <option value="11"> 11 </option>
                </select>
              </label>
              <div className="button-warrper"><input type="submit" value="OK" className="ok-button" /></div>
            </form>
          </div>
        </div>
      </div>

    )
  }
  
}

export default Home