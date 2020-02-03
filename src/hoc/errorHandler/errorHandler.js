import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../hoc';

const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            });
            axios.interceptors.response.use(res => {
                return res
            }, error => {
                console.log(error.response.data)
                this.setState({ error: error.response.data });
                //    return Promise.reject()
            });
        }

        errorConfirmed = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmed} >
                        {this.state.error ? this.state.error : null}      </Modal>
                    <WrappedComponent {...this.props} />
                </Aux >

            )

        }
    }
}
export default errorHandler;