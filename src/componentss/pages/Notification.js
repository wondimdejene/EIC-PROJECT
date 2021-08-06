import React from 'react';
import HomeTopNav from '../components/top_nav/HomeTopNav';
import Container from './stracture/Container';

import BottomNav from '../components/bottom_nav/BottomNav';


class Notification extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Notification"/>
                <Container>
                <h4 class="center-align"> Notification</h4>

        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default Notification;