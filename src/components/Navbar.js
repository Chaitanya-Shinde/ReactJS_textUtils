import React  from 'react'
import propTypes from 'prop-types'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'



export default function Navbar(props) { //imported navbar from bootstrap

  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <form className="d-flex mx-2" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
          </form>
          <div className="dropdown my-1 mx-2" >
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" 
            style={{
                backgroundColor: `${props.mode==='light'?'#198754':'white'}`, 
                color: `${props.mode==='light'?'white':'black'}`,
                }}
            >
              Theme
            </button>
            <ul className="dropdown-menu" >
              {/* <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
              <li><button className="dropdown-item" href="#" style={{height: "30px", width:'30px', backgroundColor:'lightGrey', borderStyle:'solid',borderRadius:'4px',borderWidth:'0.5px'}}></button></li>
              <li><button className="dropdown-item" href="#" style={{height: "30px", width:'30px', backgroundColor:'lightGrey', borderStyle:'solid',borderRadius:'4px',borderWidth:'0.5px'}}></button></li>
              <li><button className="dropdown-item" href="#" style={{height: "30px", width:'30px', backgroundColor:'lightGrey', borderStyle:'solid',borderRadius:'4px',borderWidth:'0.5px'}}></button></li>
            </ul>
          </div>
          <div className="form-check form-switch mx-2 my-1" >
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: `${props.mode==='light'?'black':'white'}`}}>Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
}

Navbar.defaultProps={
  title: "Default title",
  aboutText: "Default about text",
}

// const dropdownStyle={
//   padding:'10px',
//   display:'flex',
//   flexDirection: 'column',
//   justifyContent:'space-evenly',
//   height:'140px',
//   alignItems:'center',
//   minWidth:'5rem'
// }