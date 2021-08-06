import React from 'react';

import HomeTopNav from '../components/top_nav/HomeTopNav';
import Container from './stracture/Container';
import BottomNav from '../components/bottom_nav/BottomNav';

class SavedPages extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="SavedPages"/>
                <Container>
                <h4 class="center-align"> SavedPages</h4>
                         

        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default SavedPages;