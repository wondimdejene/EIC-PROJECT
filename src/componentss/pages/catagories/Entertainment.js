import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import AScrollBar from '../../components/scrollbar/ScrollBar'

class Entertainment extends Component {
    state = {  }
    render() { 
        return ( <>         
            <AScrollBar>
                <li><NavLink to={"/Entertainment/"} exact >Entertainment Trend</NavLink></li>
                  <li><NavLink to={"/Entertainment/music"} >Music</NavLink></li>
                  <li><NavLink to={"/Entertainment/movies"} >movies</NavLink></li>
                  </AScrollBar>  
                  </> );
    }
}
 
export default Entertainment;