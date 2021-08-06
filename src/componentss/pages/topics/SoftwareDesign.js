import React from 'react';

import HomeTopNav from '../../components/top_nav/HomeTopNav';
import Container from '../stracture/Container';

import BottomNav from '../../components/bottom_nav/BottomNav';
import Education from '../catagories/Education';
import Tab from '../../components/tab/Tab';

class SoftwareDesign extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Education/Software design"/>
                <Container>
                    <Tab/>
                   <Education/>    
                   <h3>SoftwareDesign</h3>   

        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default SoftwareDesign;