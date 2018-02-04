import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    borderColor: '#DDD',
    position: 'relative'
  }
};

  export { CardSection };
