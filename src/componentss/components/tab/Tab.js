import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Tab extends Component {

    render() { 
        return (         <div class="row">
        <ul class="tabs">  
        <li class="tab col s4"><NavLink  to="/" exact  >Hiber</NavLink></li>
        <li class="tab col s4"><NavLink to="/collection/" strict >Collection</NavLink></li>
        <li class="tab col s4"><NavLink to="/education/" strict >Education</NavLink></li>
          <li class="tab col s4"><NavLink to="/Entertainment/" strict  >Entertainment</NavLink></li>


        </ul>
      </div> );
    }
}
 
export default Tab;