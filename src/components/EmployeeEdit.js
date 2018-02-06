import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import {
  employeeUpdate,
  employeeSave,
  employeeDelete
} from '../actions/EmployeeActions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={() => this.onSavePress()}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onTextPress()}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button
            style={styles.fireButtonStyle}
            labelStyle={styles.labelStyle}
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire {this.props.employee.name || 'Employee'}
          </Button>
        </CardSection>

        <Confirm
          onAccept={() => this.onAccept()}
          onDecline={() => this.onDecline()}
          visible={this.state.showModal}
        >
          Are you sure you want to fire {this.props.employee.name}?
        </Confirm>
      </Card>
    );
  }
}

const styles = {
  fireButtonStyle: {
    borderWidth: 0,
    backgroundColor: 'rgb(232, 74, 74)'
  },
  labelStyle: {
    color: 'white'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift: shift || 'Monday' };
};

const actions = {
  employeeUpdate,
  employeeSave,
  employeeDelete
};

export default connect(mapStateToProps, actions)(EmployeeEdit);
