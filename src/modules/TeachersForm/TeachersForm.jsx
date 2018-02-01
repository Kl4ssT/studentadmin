import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Header} from 'semantic-ui-react';
import * as TeachersActions from '../../actions/teachers';
import * as DepartmentsActions from '../../actions/departments';

class TeachersForm extends Component {
    state = {
        name: "",
        description: "",
        channel: "",
        stream: "",
        photo: "",
        department: 0,
        file: null
    };

    constructor(props)
    {
        super(props);
    }

    componentDidMount = () => {
        this.props.getDepartments();
    };

    addTeacher = () => {
        this.props.addTeacher(this.state);
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
        return (
            <Form>
                <Header as="h2">Добавить преподавателя</Header>
                <Form.Input label="ФИО" onChange={(e) => this.setState({ name: e.target.value })} />
                <Form.TextArea label="Описание" onChange={(e) => this.setState({ description: e.target.value })} />
                <Form.Select label="Кафедра" options={this.departmentsForForm()} onChange={(e, data) => this.setState({ department: data.value })}>
                </Form.Select>
                <Form.Group inline>
                    <Form.Input label="Канал" onChange={(e) => this.setState({ channel: e.target.value })} />
                    <Form.Input label="Стрим" onChange={(e) => this.setState({ stream: e.target.value })} />
                    <Form.Field>
                        <label>Фотография</label>
                        <input type="file" onChange={(e) => this.setState({ photo: e.target.files[0].name, file: e.target.files[0] })} />
                    </Form.Field>
                </Form.Group>
                <Form.Button color="green" onClick={this.addTeacher}>Добавить</Form.Button>
            </Form>
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


export default connect(mapStateToProps, mapDispatchToProps)(TeachersForm);