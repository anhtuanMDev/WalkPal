import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { selectColorScheme } from '../redux/selectors/global';
import RootNavigation from './RootNavigation';

const RootApp = () => {
  const colorScheme = useSelector(selectColorScheme);
  console.log("root app", colorScheme);
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <RootNavigation/>
      <Toast/>
    </>
  );
};

export default RootApp;
