import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '255247687027-imbs9612opdv73c9h4cfmia8pndkeffu.apps.googleusercontent.com',
});

const SignInScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = async () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          //in future we should redirect to login page instead of console.log
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
    const userSignin = auth().signInWithCredential(googleCredential);
    userSignin
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView>
        <Button title="Google Sign-In" onPress={onGoogleButtonPress} />
        <Text>Sign up with credentials</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Enter email address"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          //style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter password"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
          //style={styles.input}
        />
        <Button
          title="Create Account"
          onPress={createAccount}
          disabled={!email || !password}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <Text>welcome {user.displayName ? user.displayName : user.email}</Text>
        <Button title="Sign out" onPress={() => auth().signOut()} />
      </SafeAreaView>
    );
  }
};

export default SignInScreen;
