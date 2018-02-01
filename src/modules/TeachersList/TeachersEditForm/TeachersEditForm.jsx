import React, {Component} from 'react';
import { Modal, Button, Form, Header } from 'semantic-ui-react';
import {bindActionCreators} from "redux";
import * as TeachersActions from "../../../actions/teachers";
import * as DepartmentsActions from "../../../actions/departments";
import {connect} from "react-redux";

class TeachersEditForm extends Component {
    state = {
        id: null,
        name: null,
        photo: null,
        description: null,
        channel_id: null,
        stream_id: null,
        id_category: null
    };

    componentDidMount = () => {
        const { id, id_category, name, description, channel_id, stream_id } = this.props;

        this.setState({id, id_category, name, description, channel_id, stream_id});
    };

    editTeacher = () => {
        this.props.editTeacher(this.state);
    };

    departmentsForForm = () => {
        const options = [];
        this.props.departments.map((item, index) => {
            options.push({
                key: index,
                text: item.title,
                value: item.id
            });
        });

        return options;
    };

    render = () => {
        const { id, id_category, name, description, channel_id, stream_id } = this.state;

        return (
            <Modal trigger={<Button color="blue" icon="edit" />}>
                <Modal.Header>Изменить преподавателя</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Header as="h2">Преподаватель #{id}</Header>
                        <Form.Input label="ФИО" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                        <Form.TextArea label="Описание" value={description} onChange={(e) => this.setState({ description: e.target.value })} />
                        <Form.Select label="Кафедра" defaultValue={id_category} options={this.departmentsForForm()} onChange={(e, data) => this.setState({ department: data.value })}>
                        </Form.Select>
                        <Form.Group inline>
                            <Form.Input label="Канал" value={channel_id} onChange={(e) => this.setState({ channel_id: e.target.value })} />
                            <Form.Input label="Стрим" value={stream_id} onChange={(e) => this.setState({ stream: e.target.value })} />
                            <Form.Field>
                                <label>Фотография</label>
                                <input type="file" onChange={(e) => this.setState({ photo: e.target.files[0] })} />
                            </Form.Field>
                        </Form.Group>
                        <Form.Button color="blue" onClick={this.editTeacher}>Изменить</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teachers: state.teachers,
        departments: state.departments
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...TeachersActions, ...DepartmentsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeachersEditForm);