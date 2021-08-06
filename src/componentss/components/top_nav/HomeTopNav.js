import React from 'react';

class HomeTopNav extends React.Component { 

    render() { 
        return ( <>
           <div class="row top_nav" id="navbar">
  <div class="col top_nav_name" ><span >{this.props.title}</span></div>
</div>
        </> );
    }
}
 
export default HomeTopNav;