import React from 'react';

import HomeTopNav from '../components/top_nav/HomeTopNav';
import Container from './stracture/Container';
import BottomNav from '../components/bottom_nav/BottomNav';

class Search extends React.Component {

    render() { 
        return ( <>
        <HomeTopNav title="Search"/>
                <Container>
                <h4 class="center-align"> search</h4>                                           
        <BottomNav/>
        </Container>
        

        </> ); 
    }
}
 
export default Search;