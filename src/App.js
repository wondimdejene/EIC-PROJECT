import React from 'react'  
import { Route ,Switch} from "react-router-dom";

import Home from './componentss/pages/Home';
import Detail from './componentss/pages/Detail'
import Comment from './componentss/pages/Comment'
import SavedPages from './componentss/pages/SavedPages'
import Notification from './componentss/pages/Notification'
import Search from './componentss/pages/Search'
import Profile from './componentss/pages/Profile'
import Privacy from './componentss/pages/Privacy'



import EducationTrend from './componentss/pages/topics/Trends/EducationTrend';
import SoftwareDesign from './componentss/pages/topics/SoftwareDesign';
import Programming  from './componentss/pages/topics/Programming'
// 
import EntertainmentTrend from './componentss/pages/topics/Trends/EntertainmentTrend';
import  Music  from './componentss/pages/topics/Music'
import Movies from './componentss/pages/topics/Movies';
// 

// 
import CollectionTrend from './componentss/pages/topics/Trends/CollectionTrend';
import Innovation from './componentss/pages/topics/Innovation';
import Technology from './componentss/pages/topics/Technology';






class App extends React.Component {  

  render() {  
     return(
       
       <>
       <Switch>
               <Route  exact  path={"/"} ><Home/></Route>
                <Route path={"/savedpages"} ><SavedPages/></Route>
                <Route path={"/notification"} ><Notification/></Route>
                <Route path={"/search"} ><Search/></Route>
                <Route path={"/profile"}><Profile/></Route>
                <Route path={"/detail"} ><Detail/></Route>
                <Route path={"/comment"}><Comment/></Route>
                <Route path={"/privacy"}><Privacy/></Route>
                {/* enter */}
                <Route  path={"/Entertainment/"} exact><EntertainmentTrend/></Route>
                <Route path={"/Entertainment/music"} ><Music/></Route>
                <Route path={"/Entertainment/movies"} ><Movies/></Route>
                {/* edu */}
                <Route  path={"/education/"} exact><EducationTrend/></Route>
                <Route path={"/education/software_design"} ><SoftwareDesign/></Route>
                <Route path={"/education/programming"} ><Programming/></Route>
                {/* other */}
                <Route path={"/collection/"} exact><CollectionTrend/></Route>
                <Route path={"/collection/technology"} ><Technology/></Route>
                <Route path={"/collection/innovation"} ><Innovation/></Route>
                </Switch>

      </>

     );
  }  

}  
export default App 