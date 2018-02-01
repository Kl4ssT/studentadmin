import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Header} from 'semantic-ui-react';
import * as DepartmentsActions from '../../actions/departments';

class DepartmentsForm extends Component {
    state = {
        title: "",
        icon: null,
        color: "",
        image: null
    };

    constructor(props)
    {
        super(props);
    }

    componentDidMount = () => {
        this.props.getDepartments();
    };

    addDepartment = () => {
        this.props.addDepartment(this.state);
    };

    render = () => {
        return (
            <Form>
                <Header as="h2">Добавить кафедру</Header>
                <Form.Input label="Название" onChange={(e) => this.setState({ title: e.target.value })} />
                <Form.Group inline>
                    <Form.Field>
                        <label>Иконка</label>
                        <input type="file" onChange={(e) => this.setState({ icon: e.target.files[0] })} />
                    </Form.Field>
                    <Form.Input label="Цвет" onChange={(e) => this.setState({ color: e.target.value })} />
                    <Form.Field>
                        <label>Изображение</label>
                        <input type="file" onChange={(e) => this.setState({ photo: e.target.files[0] })} />
                    </Form.Field>
                </Form.Group>
                <Form.Button color="green" onClick={this.addDepartment}>Добавить</Form.Button>
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

const mapDispatchToProps = (dispatch) => bindActionCreators(DepartmentsActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsForm);