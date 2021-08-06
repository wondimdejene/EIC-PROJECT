import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import AScrollBar from '../../components/scrollbar/ScrollBar'

class Education extends Component {
    state = {  }
    render() { 
        return ( <>  
        
            <AScrollBar><li><NavLink to={"/education/"} exact >Education trend</NavLink></li>
                      <li><NavLink to={"/education/software_design" } >Software design</NavLink></li>
                      <li><NavLink to={"/education/programming"} >Programming</NavLink></li></AScrollBar>
                      
            </> );
    }
}
 
export default Education;