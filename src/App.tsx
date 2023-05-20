import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import TextInputField from './Components/TextInputField';
import PrimaryButton from './Components/PrimaryButton';
import ExternalStyles from './utils/styles/ExternalStyles';
import RecipeCard from './Components/RecipeCard';

const App = () => {
  return (
    <SafeAreaView>
      {/* <Text style={ExternalStyles.text}>hello</Text>
      <TextInputField />
      <PrimaryButton title="press me" /> */}
      <RecipeCard />
    </SafeAreaView>
  );
};
export default App;
