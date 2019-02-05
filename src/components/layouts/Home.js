import React from 'react'
import './Home.css'

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
            <button className="btn-tables">Show Tables</button>
            <button className="btn-emails">Emails Data </button>
        </div>
      </div>
    </div>
  )
}

export default Home