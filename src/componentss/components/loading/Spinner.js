import React, { Component } from 'react';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
            <div class="row center-align">
      <div class="preloader-wrapper small active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
        </> );
    }
}
 
export default Spinner;