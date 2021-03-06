import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate, employeeResetForm } from '../actions/EmployeeActions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.employeeResetForm();
  }
  
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  
  return { name, phone, shift: shift || 'Monday' };
};

const actions = {
  employeeCreate,
  employeeResetForm
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
