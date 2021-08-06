import React from 'react';

import HomeTopNav from '../../../components/top_nav/HomeTopNav';
import Container from '../../stracture/Container';

// 
import BottomNav from '../../../components/bottom_nav/BottomNav';
import Education from '../../catagories/Education';
import Tab from '../../../components/tab/Tab';

class EducationTrend extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Education/trending"/>
                <Container>
                  <Tab/>
                   <Education/>
      

        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default EducationTrend;