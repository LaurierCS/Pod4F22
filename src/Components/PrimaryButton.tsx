import React from 'react';
import {Alert, View} from 'react-native';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import ExternalStyles from '../utils/styles/ExternalStyles';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

const PrimaryButton = ({title, onPress}: PrimaryButtonProps) => {
  return (
    //<View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    // </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },

  button: {
    backgroundColor: '#F30000',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    width: 120,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    // elevation: 1000, // Add elevation for shadow effect
  },
});

PrimaryButton.defaultProps = {
  title: 'Press me',
  onPress: () => {
    Alert.alert('You pressed me!');
  },
};
