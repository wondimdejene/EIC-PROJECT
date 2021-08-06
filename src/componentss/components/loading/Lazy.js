import React, { Component } from 'react';
import Spinner from './Spinner'
import ErrorBoundary from './ErrorBoundary'
class Lazy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
        <ErrorBoundary>
        <React.Suspense fallback={<Spinner />}>
            {this.props.children}
    </React.Suspense>
    </ErrorBoundary>
        </> );
    }
}
 
export default Lazy;