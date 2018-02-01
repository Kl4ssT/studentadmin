import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'semantic-ui-react';
import * as Actions from '../../actions/teachers';
import TeachersEditForm from "./TeachersEditForm";

class TeachersList extends Component {
    constructor(props)
    {
        super(props);
    }

    componentDidMount = () => {
        this.props.getTeachers();
    };

    removeBtn = (id) => {
        this.props.removeTeacher(id);
    };

    render = () => {
        const { teachers } = this.props;

        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Фото</Table.HeaderCell>
                        <Table.HeaderCell>ФИО</Table.HeaderCell>
                        <Table.HeaderCell>Действия</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { teachers.map((teacher, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{ teacher.id }</Table.Cell>
                                <Table.Cell>{/*<img src={'/api/' + teacher.photo} alt=""/>*/}</Table.Cell>
                                <Table.Cell>{ teacher.name }</Table.Cell>
                                <Table.Cell>
                                    <TeachersEditForm {...teacher} />
                                    <Button color="red" icon="remove" onClick={this.removeBtn.bind(this, teacher.id)} />
                                </Table.Cell>
                            </Table.Row>
                        );
                    }) }
                </Table.Body>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teachers: state.teachers
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TeachersList);