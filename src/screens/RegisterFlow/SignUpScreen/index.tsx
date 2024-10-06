import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RegisterView from './view';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function () {
    const route = useRoute();
    const data = route.params;

  return <RegisterView {...data}/>;
}
