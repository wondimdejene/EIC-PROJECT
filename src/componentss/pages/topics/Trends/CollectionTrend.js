import React from 'react';

import HomeTopNav from '../../../components/top_nav/HomeTopNav';
import Container from '../../stracture/Container';

// 
import BottomNav from '../../../components/bottom_nav/BottomNav';
import Tab from '../../../components/tab/Tab';
import Collection from '../../catagories/Collection';

class CollectionTrend extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Collection/Trending"/>
                <Container>
                    <Tab/>
                 <Collection/>      

        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default CollectionTrend;