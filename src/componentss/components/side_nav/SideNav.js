import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
        this.off = this.off.bind(this)
    }


    openNav(){
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("overlay").style.display = "block";
    }
    closeNav(){
        document.getElementById("overlay").style.display = "none";
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
    }
    
    off() {
    document.getElementById("overlay").style.display = "none";
        document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
    render() { 
        return ( <>

<nav id="mySidenav" class="w_sidenav" >
  <ul id="myMenu">
         <li>
      <div class="divider"></div>
    </li>
    <li>
      <div class="divider"></div>
    </li>
    <li><NavLink class="btn btn-block btn-flat" onClick="closeNav()" to="/privacy">privacy</NavLink></li>
    <li><NavLink class="btn btn-block btn-flat" onClick="closeNav()" to="/privacy">terms of use</NavLink></li>
    <li><NavLink class="btn btn-block btn-flat" onClick="closeNav()" to="/privacy">code of</NavLink></li>
    <li>
      <div class="divider"></div>
    </li>
    <li>
      <div class="divider"></div>
    </li>
    <li><NavLink class="btn btn-block btn-flat" onClick="closeNav()" to="/privacy">privacy</NavLink></li>
  </ul>
</nav>
<div id="overlay" onClick="off()"></div>

        </> );
    }
}
 
export default SideNav;