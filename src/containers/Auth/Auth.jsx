import React, { Component } from 'react';
import { Modal, Form } from 'semantic-ui-react';
import * as Actions from '../../actions/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {checkAuth} from "../../router/Router";
import { Redirect } from 'react-router-dom';

class Auth extends Component
{
    state = {
        login: "",
        password: "",
        isAuth: false
    };

    componentDidMount()
    {
        this.setState({ isAuth: checkAuth() });
    }

    authHandle = () => {
        this.props.authUser(this.state)
            .then(result => this.setState({ isAuth: result }));
    };

    render = () => {
        if (this.state.isAuth)
            return <Redirect to="/" />;

        return (
            <Modal open={true}>
                <Modal.Header>Вход в панель управления</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input label="Логин" placeholder="Логин" onChange={(e) => this.setState({ login: e.target.value })} />
                        <Form.Input label="Пароль" placeholder="Пароль" onChange={(e) => this.setState({ password: e.target.value })} />
                        <Form.Button color="green" onClick={this.authHandle}>Войти</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Auth);