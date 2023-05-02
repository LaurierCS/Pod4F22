import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, TextInput} from 'react-native';
import SignInScreen from './Screens/SignInScreen';
import auth from '@react-native-firebase/auth';

const App = () => {
  return (
    <SafeAreaView>
      <SignInScreen />
    </SafeAreaView>
  );
};

export default App;
