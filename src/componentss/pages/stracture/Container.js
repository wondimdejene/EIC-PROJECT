import React, { Component } from 'react';
class Container extends Component {

    render() { 
        return ( <>

        <main>
            <div class="container">
              <div class="row" >
                <div class="col s12"> 
                  {this.props.children}

                </div>
         
                
              </div>
            </div>
          </main>

          </> );
    }
}
 
export default Container;