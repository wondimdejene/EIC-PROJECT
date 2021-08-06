import React from 'react';

import HomeTopNav from '../components/top_nav/HomeTopNav';
import Container from './stracture/Container';
import BottomNav from '../components/bottom_nav/BottomNav';
import Tab from '../components/tab/Tab';


class Home extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Home"/>
                <Container>
                    <Tab/>
                    <h3 class="center-align">home of HIBER web app</h3>
        <BottomNav/>
        </Container>
        </> ); 
    }
}
 
export default Home;