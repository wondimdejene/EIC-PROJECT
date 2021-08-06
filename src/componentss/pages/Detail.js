import React from 'react';
import ToBackTopNav from '../components/top_nav/ToBackTopNav';
import Container from './stracture/Container';
import DetailCard from '../components/detail_card/DetailCard'

class Detail extends React.Component {

    render() { 
        return ( <>
        
        <ToBackTopNav title="Detail"/>
                <Container>
                  <DetailCard/>

        </Container>
        

        </> ); 
    }
}
 
export default Detail;