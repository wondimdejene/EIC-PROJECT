import React from 'react';

import HomeTopNav from '../../components/top_nav/HomeTopNav';
import Container from '../stracture/Container';
import Card from '../../components/card/Card';
// 
import BottomNav from '../../components/bottom_nav/BottomNav';
import Tab from '../../components/tab/Tab';
import Collection from '../catagories/Collection';


class Innovation extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Collection/Inovation"/>
                <Container>
                    <Tab/>
                   <Collection/>   
                   <Card author="wondim" date="june 24" post="this is cardddddd page of the app"/>

        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default Innovation;