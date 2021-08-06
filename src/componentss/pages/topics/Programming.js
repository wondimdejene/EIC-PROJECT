import React from 'react';

import HomeTopNav from '../../components/top_nav/HomeTopNav';
import Container from '../stracture/Container';

// 
import BottomNav from '../../components/bottom_nav/BottomNav';
import Education from '../catagories/Education';
import Tab from '../../components/tab/Tab';

class Programming extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Education/Programming"/>
                <Container>
                    <Tab/>
                 <Education/>   

        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default Programming;