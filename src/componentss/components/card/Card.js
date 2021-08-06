import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Card extends Component {
    state = {  }
    render() { 
        return ( <><div class="row ">
        <section class="col s12">
          
          <div class="card">
    <div><NavLink to="/profile"><span class="left"><img class="circlee" src="./Screenshot (12).png" alt="pro_pic"></img> <span class="author_name">{this.props.author}</span></span></NavLink><span class="right post_date" >{this.props.date}</span></div>
            <NavLink to="/detail">
            <div class=" card-content">
              <p>{this.props.post}</p>
            </div>
            </NavLink>
            <div class="divider"></div>
            <div class="post_section_menus_button ">
               <NavLink to="" class="btn-small btn-flat border-hiden" > like</NavLink>
                <span class="like">8</span> 
                <NavLink class="btn-small btn-flat border-hiden" to="/comment">comment</NavLink>
                <span class="like">12</span>
                <NavLink to="#" class="btn-small btn-flat right border-hiden" > Bookmark</NavLink>
                 </div>
          </div>
        </section>
      </div></> );
    }
}
 
export default Card;