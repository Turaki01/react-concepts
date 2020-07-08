import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Alert = ({type, message, children, show, toggleAlert}) => {
    return (
    <div>
      {
        show && <div onClick={toggleAlert} className={`alert alert-${type}`} role="alert">
        {message ? message : children}
     </div>
      }
    </div>
  )
  
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string,
  show: PropTypes.bool,
  toggleAlert: PropTypes.func
};

Alert.defaultProps = {
  message: null,
  show: true,
  toggleAlert() {}
}

const withAnimation = (Component) => {
  const AnimatedComponent = (props) => {
    return (
      <div data-wow-delay="0.5s" className="span3 wow bounceInDown center">
        <Component {...props} />
      </div>
    )
  };

  return AnimatedComponent;
}; 


const withDismiss = (Component) => {
  class DismissableComponent extends React.Component {
    
    componentDidMount() {
      setTimeout(() => {
          this.props.toggleAlert();
      }, 2000)
    }
    
    render() {
      return <Component {...this.props}/>
    }
  };

  return DismissableComponent;
};


const AnimatedAlert = withAnimation(Alert);

const DismissableAlert = withDismiss(AnimatedAlert)


export default DismissableAlert