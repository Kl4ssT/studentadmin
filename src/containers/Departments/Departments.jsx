import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/auth';

import DepartmentsList from '../../modules/DepartmentsList';
import DepartmentsForm from '../../modules/DepartmentsForm';

class Departments extends Component {
    render = () => {
        return (
            <section className="teachers-page">
                <Grid columns={2}>
                    <Grid.Column>
                        <Segment>
                            <DepartmentsList />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <DepartmentsForm />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Departments);