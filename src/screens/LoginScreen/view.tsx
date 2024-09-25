import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { MagnifyingGlass } from '../../assets/svg'
import AppHeader from '../../components/AppHeader'
import AppTitleHeader from '../../components/AppTitleHeader'

const LoginScreenView = () => {
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top}]}>
        <AppHeader lead={
            <MagnifyingGlass width={40} height={40} fill='blue'/>
        }/>
        <AppTitleHeader title='Hello' greeting='World' content='it is nice to meet you'/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
})
export default LoginScreenView