import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './RootStack'
import { navRef } from './NavController'

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navRef}>
        <RootStack/>
    </NavigationContainer>
  )
}

export default RootNavigation