import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift } = this.props;

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          {/* <Text style={styles.pickerLabelStyle}>Shift</Text> */}
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            {daysOfWeek.map(day => <Picker.Item key={day} label={day} value={day} />)}
          </Picker>
        </CardSection>
      </View>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
