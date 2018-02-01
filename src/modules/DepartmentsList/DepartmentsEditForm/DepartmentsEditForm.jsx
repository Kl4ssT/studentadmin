import React, {Component} from 'react';
import { Modal, Button, Form, Header } from 'semantic-ui-react';
import {bindActionCreators} from "redux";
import * as DepartmentsActions from "../../../actions/departments";
import {connect} from "react-redux";

class DepartmentsEditForm extends Component {
    state = {
        id: null,
        title: null,
        photo: null,
        icon: null,
        color: null
    };

    componentDidMount = () => {
        const { id, title, photo, icon, color } = this.props;

        this.setState({ id, title, photo, icon, color });
    };

    editDepartment = () => {
        this.props.editDepartment(this.state);
    };

    render = () => {
        const { id, title, color } = this.state;

        return (
            <Modal trigger={<Button color="blue" icon="edit" />}>
                <Modal.Header>Изменить кафедру</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Header as="h2">Кафедра #{id}</Header>
                        <Form.Input label="Название" value={title} onChange={(e) => this.setState({ title: e.target.value })} />
                        <Form.Group inline>
                            <Form.Field>
                                <label>Иконка</label>
                                <input type="file" onChange={(e) => this.setState({ icon: e.target.files[0] })} />
                            </Form.Field>
                            <Form.Input label="Цвет" value={color} onChange={(e) => this.setState({ color: e.target.value })} />
                            <Form.Field>
                                <label>Изображение</label>
                                <input type="file" onChange={(e) => this.setState({ photo: e.target.files[0] })} />
                            </Form.Field>
                        </Form.Group>
                        <Form.Button color="blue" onClick={this.editDepartment}>Изменить</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(DepartmentsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsEditForm);