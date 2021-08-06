import React, { Component } from 'react';
class AScrollBar extends Component {

    render() { 
        return ( <>       
        <div class="row">
        <div class="scrollmenu">
          <ul>
              {this.props.children}
          </ul>
        </div></div>
   

      </> );
    }
}
 
export default AScrollBar;