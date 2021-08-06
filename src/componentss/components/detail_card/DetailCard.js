import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class DetailCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
                        <div class="detail_card ">
          <div class="detail_card-image "><img  src="./Screenshot (12).png" alt="cover_pic"></img> </div>
          <div class="row">
            <div class="col s12"><NavLink to="/profile"><span class="left"><img class="circlee" src="./Screenshot (12).png" alt="pro_pic"></img>  <span class="author_name">wondim dejenee</span></span></NavLink><span class="right post_date" >september 22</span></div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col s12"> <div class="detail_card-title "><p>This day's choosing the right framework for front-end web desining is  so dificult</p></div> </div>
          </div>
          <div class="divider"></div>
          <div class=" detail_card-content ">
            <p > gestas semper. Aenean ultricies mi vitae est. Mauris
                 placerat eleifend leo. Quisque sit amet est et sapien ulla
                 mcorper pharetra. Vestibulum erat wisi, condimentum sed, commo
                 do vitae, ornare sit amet, wisi. Aenean fermentum, elit eget t
                 incidunt condimentum, eros ipsum rutrum orci, sagittis tempus l
                 acus enim ac dui. Donec non enim in turpis pulvinar facilisis. U
                 t felis. Praesent dapibus, neque id cursus faucibus, tortor neque
                  egestas augue, eu vulputate magna eros eu erat. Aliquam erat vo</p>
          </div>
          <div class="divider"></div>
          <div class="post_section_menus_button "> 
           
           <NavLink class="btn-small btn-flat border-hiden" to="#">like </NavLink><span class="like">85</span> 
           <NavLink class="btn-small btn-flat border-hiden" to="/comment"> comment</NavLink><span class="like">38</span>
           <NavLink class="btn-small btn-flat border-hiden right" to="#"> Bookmark</NavLink>
   </div>
        </div>
        </> );
    }
}
 
export default DetailCard;