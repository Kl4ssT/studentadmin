import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import Router from '../../router';
import { Link } from 'react-router-dom';

import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

class App extends Component
{
    render = () => {
        return (
            <Provider store={store}>
                <Router>
                    <Sidebar as={Menu} direction="top" visible={true} inverted>
                        <Link to="/admin/teachers">
                            <Menu.Item name="main">
                                <Icon name="user" />
                                Преподаватели
                            </Menu.Item>
                        </Link>
                        <Link to="/admin/departments">
                            <Menu.Item name="main">
                                <Icon name="group" />
                                Кафедры
                            </Menu.Item>
                        </Link>
                    </Sidebar>
                </Router>
            </Provider>
        );
    }
}

export default App;