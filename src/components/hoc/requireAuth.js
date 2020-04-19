import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


export default (ChildComponent) => {
  class ComposedClass extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      if (!this.props.auth) return <Redirect to='/' />;
      return <ChildComponent />
    }
  }

  return connect(state => {
    return {
      auth: state.auth.auth
    }
  }, null)(ComposedClass);
}
