import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button, Icon } from 'semantic-ui-react';
import * as Actions from '../../actions/departments';
import { Link } from 'react-router-dom';
import DepartmentsEditForm from './DepartmentsEditForm';

class DepartmentsList extends Component {
    constructor(props)
    {
        super(props);
    }

    componentDidMount = () => {
        this.props.getDepartments();
    };

    removeBtn = (id) => {
        this.props.removeDepartment(id);
    };

    render = () => {
        const { departments } = this.props;

        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Название</Table.HeaderCell>
                        <Table.HeaderCell>Действия</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { departments.map((department, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{ department.id }</Table.Cell>
                                <Table.Cell>{ department.title }</Table.Cell>
                                <Table.Cell>
                                    <DepartmentsEditForm {...department} />
                                    <Button color="red" icon="remove" onClick={this.removeBtn.bind(this, department.id)} />
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
        departments: state.departments
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsList);