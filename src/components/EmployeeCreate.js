import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift, employeeCreate } = this.props;

    employeeCreate({ name, phone, shift });
  }

  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={value => employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value => employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          {/* <Text style={styles.pickerLabelStyle}>Shift</Text> */}
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            onValueChange={value => employeeUpdate({ prop: 'shift', value })}
          >
            {daysOfWeek.map(day => <Picker.Item key={day} label={day} value={day} />)}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 5
  }
};

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  
  return { name, phone, shift: shift || 'Monday' };
};

const actions = {
  employeeUpdate,
  employeeCreate
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
