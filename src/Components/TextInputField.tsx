import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TextInputField = props => {
  const {placeholder, onChangeText, defaultValue} = props;
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontFamily: 'Poppins-Bold',
  },
});
