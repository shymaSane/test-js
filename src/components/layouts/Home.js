import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';


function Home() {

  return (
    <div className="container">
      <div className="cover-text">
        <div className="text-container">
            <h4 className="text1">Inspire your data</h4>
            <h1 className="text2"><span>W</span>elcome <span>t</span>o <span>S</span>howTables</h1>
            <h3 className="text3">Start with us</h3>
        </div>
        <div className="button-container">
            <button className="btn-tables"><Link to='/api/tables' className="nav-link">Show Tables</Link></button>
            <button className="btn-emails"><Link to='/api/emails' className="nav-link">Emails Data</Link> </button>
        </div>
      </div>
    </div>
  )
}

export default Home