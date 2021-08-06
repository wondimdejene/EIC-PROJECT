import React from 'react';

import HomeTopNav from '../../components/top_nav/HomeTopNav';
import Container from '../stracture/Container';

// 
import BottomNav from '../../components/bottom_nav/BottomNav';
import Entertainment from '../catagories/Entertainment';
import Tab from '../../components/tab/Tab';

class Movies extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Entertainment/Movies"/>
                <Container>
                    <Tab/>
                   <Entertainment/>

        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default Movies;