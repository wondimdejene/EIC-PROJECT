import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class ToBackTopNav extends React.Component { 



    render() { 
        return ( <>
           <div class="row top_nav" id="navbar"><a href="javascript:history.go(-1)"   class="col btn-flat border-hiden top_nav_back" >Back </a>
  
  <div class="col top_nav_name" ><span >{this.props.title}</span></div>
</div>
        </> );
    }
}
 
export default ToBackTopNav;