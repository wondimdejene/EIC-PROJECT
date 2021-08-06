import React, { Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
      }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <><div>
              <h6>something went wrong <br></br>refresh to reload</h6>
              </div></>
        }
    
        return this.props.children; 
      }
}
 
export default ErrorBoundary;