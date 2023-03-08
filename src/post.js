// import React from "react";
import React, {Component, useState} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
           
        };
    }

    handlenameChange=(event)=>{
        this.setState({name:event.target.value});
    };
    handleidChange=(event)=>{
        this.setState({id:event.target.value});
    };
   

 handleSubmit = (event) => {

event.preventDefault();

const data={
    id:this.state.id,
    name:this.state.name,
    
};
axios.post('http://localhost:8080/Post',data)
};

    render(){
        return(
        <div>
            {/* <header className="nav-header">
            <input type="checkbox" id="nav-check" />
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span />
                <span />
                <span />
              </label>
            </div>
            <nav className="nav-links" aria-label="Navigation links in  TravCom header">
              <ul>
              <li className="navItems"><Link to='/'>HOME</Link></li>
              <li className="navItems"><Link to='/page1'>UPDATE REGISTRY</Link></li>
              <li className="navItems"><Link to='/page2'>DELETE REGISTRY</Link></li>
              <li className="navItems"><Link to='/page3'>VIEW REGISTRY</Link></li>
              </ul>
            </nav>
          </header> */}
          {/* <header>
          <div class="navbar">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/page1">UPDATE REGISTRY</Link></li>
              <li><Link to="/page2">DELETE REGISTRY</Link></li>
              <li><Link to="/page3">VIEW REGISTRY</Link></li>
            </ul>
          </div>
          </header> */}
         
      <div className="container1">
        <form onSubmit={this.handleSubmit}>

            <h4>BOOKING</h4>
   
              <div className="row">
              <div className="input-group input-group-icon">
              <input type="text" placeholder="id" value={this.state.id} onChange={this.handleidChange}/>
              
            </div>
            <div className="input-group input-group-icon">
              <input type="text" placeholder="Name" value={this.state.name} onChange={this.handlenameChange}/>
              
            </div>
         
          <input type="submit"/>
          </div>
        </form>
      </div>
      {/* <Link to='/'>home</Link>
      <Link to='/get'>get</Link>
      <Link to="/put">put</Link> */}
      {/* <Link to= '/page3'>click</Link>
      <Link to='/page1'>click2</Link>
      <Link to="/page2">click3</Link> */}
      <div>
        <ul>
                  <li>
      <Link to='/'>home</Link></li>
      <li><Link to='/get'>get</Link></li>
      <li><Link to="/put">put</Link></li>
      
      </ul>
      </div>
        </div>
    );
}
}
export default Home;