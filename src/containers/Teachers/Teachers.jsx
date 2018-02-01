import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/auth';

import TeachersList from '../../modules/TeachersList';
import TeachersForm from '../../modules/TeachersForm';

class Teachers extends Component {

    render = () => {
        return (
            <section className="teachers-page">
                <Grid columns={2}>
                    <Grid.Column>
                        <Segment>
                            <TeachersList />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <TeachersForm />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Teachers);