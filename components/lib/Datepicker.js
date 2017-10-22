import React from 'react';
import { StyleSheet } from 'react-native';
import DP from 'react-native-datepicker';
import moment from 'moment';

function DatePicker(props) {
  return (
    <DP
      customStyles={datePickerStyles}
      style={styles.datepicker}
      showIcon={false}
      mode="date"
      format="MMMM DD, YYYY"
      date={props.date}
      androidMode="spinner"
      placeholder="Date of Birth"
      confirmBtnText="Select"
      cancelBtnText="Cancel"
      onDateChange={props.onDateChange}
    />
  );
}

let datePickerStyles = {
  dateInput: {
    height: 40,
    width: 290,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  placeholderText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
};
//
let styles = StyleSheet.create({
  datepicker: {
    width: 290,
    height: 40,
    margin: 12,
    borderRadius: 3,
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default DatePicker;
