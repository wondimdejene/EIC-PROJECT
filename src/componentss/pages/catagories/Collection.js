import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import AScrollBar from '../../components/scrollbar/ScrollBar'

class Collection extends Component {
    state = {  }
    render() { 
        return ( <>  
              
            <AScrollBar><li><NavLink to={"/collection/"} exact>Collection Trend</NavLink></li>
                      <li><NavLink to={"/collection/technology"} >Technology</NavLink></li>
                      <li><NavLink to={"/collection/innovation"} >Innovation</NavLink></li></AScrollBar>
                </> );
    }
}
 
export default Collection;