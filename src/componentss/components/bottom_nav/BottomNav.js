import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class BottomNav extends Component {
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
    <li><NavLink class=" btn-block btn-flat"  to="/profile">profile</NavLink></li>
    
    <li>
      <div class="divider"></div>
    </li>
<li><NavLink class=" btn-block btn-flat"  to="/privacy">terms of use</NavLink></li>
    <li><NavLink class=" btn-block btn-flat"  to="/privacy">code of</NavLink></li>
    <li>
      <div class="divider"></div>
    </li>
    <li>
      <div class="divider"></div>
    </li>
    <li><NavLink class=" btn-block btn-flat"  to="/privacy">privacy</NavLink></li>
  </ul>
</nav>
<div id="overlay" onClick={this.off}></div>
 
    <div class="bottom_fixed_nav hide-on-large-and-up">
      <div class="col g2"><NavLink class="btn-small btn-flat border-hiden" to="/savedpages"  activeStyle={{ color:"purple"}} >saved</NavLink>  </div>
      <div class="col g2"><NavLink class="btn-small btn-flat border-hiden" to="/notification"  activeStyle={{ color:"green"}}>Notf</NavLink>  </div>
      <div class="col g2"><NavLink class="btn-small btn-flat border-hiden" to="/" exact activeStyle={{ color:"red"}}>Home</NavLink>  </div>
      <div class="col g2"><NavLink class="btn-small btn-flat border-hiden" to="/search"  activeStyle={{ color:"gray"}}>Search</NavLink>  </div>
      <div class="col g2 pro_icon"><button  class="btn-small btn-flat border-hiden"  onClick={this.openNav}  activeStyle={{ color:"yellow"}}>Menu</button>  </div>
    </div>


        </> );
    }
}
 
export default BottomNav;