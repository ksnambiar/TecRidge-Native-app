/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Navigation from "./Navigation";
import {Provider} from "react-redux";
import Store from "./Store/Store";
const App = () => {
  return (
    <Provider store={Store}>
   <Navigation />
   </Provider>
  );
};


export default App