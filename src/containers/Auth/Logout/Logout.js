import React, { Component } from "react";
import { connect } from 'react-redux';
import { logout, initialState } from '../../../store/actions';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    componentDidMount() {
        this.props.initialState();
        this.props.logout();
    }
    render() {
        return <Redirect to='/' />;
    }
}

export default connect(null, { initialState, logout })(Logout);