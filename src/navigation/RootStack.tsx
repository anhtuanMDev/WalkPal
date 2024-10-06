import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterFormScreen from '../screens/RegisterFlow/RegisterFormScreen';
import SelectTypeUserScreen from '../screens/RegisterFlow/SelectTypeUserScreen';
import SignUpScreen from '../screens/RegisterFlow/SignUpScreen';
import { AUTH_ROUTES, PUBLIC_ROUTES } from './routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  header: () => null,
  cardOverlayEnabled: true,
  headerShown: false,
};

const PublicStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={PUBLIC_ROUTES.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={PUBLIC_ROUTES.REGISTER_SCREEN}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={PUBLIC_ROUTES.FORM_REGISTER_SCREEN}
        component={RegisterFormScreen}
      />
      <Stack.Screen
        name={PUBLIC_ROUTES.SELECT_USER_TYPE}
        component={SelectTypeUserScreen}
      />
    </Stack.Navigator>
  );
};

const BottomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {'Hello'}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const AuthTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={(props) => <BottomTab {...props}/>}>
      <Tab.Screen component={HomeScreen} name={AUTH_ROUTES.HOME_SCREEN}/>
      <Tab.Screen component={ProfileScreen} name={AUTH_ROUTES.PROFILE_SCREEN}/>
    </Tab.Navigator>
  )
};

const AuthStacks = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={'AuthTab'} component={AuthTab} />
    </Stack.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="PublicStack" component={PublicStack} />
      <Stack.Screen name="AuthStack" component={AuthStacks} />
    </Stack.Navigator>
  );
};

export default RootStack;
