import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {TheFollowSVG, TheLeadSVG} from '../../../assets/svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLOR} from '../../../utils/colorEnum';
import AppTitleHeader from '../../../components/AppTitleHeader';
import {textStyle} from '../../../utils/textStyle';
import {getSize} from '../../../utils/responsive';
import AppButtonFill from '../../../components/AppButtonFill';
import {naviagte} from '../../../navigation/NavController';
import {AUTH_ROUTES} from '../../../navigation/routes';

const SelectTypeUserView = () => {
  const {top} = useSafeAreaInsets();
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSelect = (type: any) => {
    setSelectedType(type);
  };

  return (
    <View style={[styles.container]}>
      <AppTitleHeader
        title="Your's role is"
        titleStyle={textStyle.header.hb6}
        containerStyle={styles.headetitle}
      />
      <View style={[styles.rowButtons]}>
        {/* Follow SVG Pressable */}
        <Pressable
          style={[styles.pressable]}
          onPress={() => handleSelect('FOLLOW')}>
          <TheFollowSVG size={selectedType === 'FOLLOW' ? 80 : 60} />
        </Pressable>

        {/* Lead SVG Pressable */}
        <Pressable
          style={[styles.pressable]}
          onPress={() => handleSelect('LEAD')}>
          <TheLeadSVG size={selectedType === 'LEAD' ? 80 : 60} />
        </Pressable>

        {selectedType && (
          <AppTitleHeader
            title={`${selectedType}`}
            titleStyle={textStyle.header.h6}
            containerStyle={styles.pointerText}
          />
        )}

        <AppButtonFill
          disabled={selectedType === ''}
          styleButton={styles.buttonConfirm}
          onPress={() =>
            naviagte('AuthStack')
          }
        />
      </View>
    </View>
  );
};

export default SelectTypeUserView;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headetitle: {
    marginBottom: getSize.v(12),
  },
  rowButtons: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pressable: {
    width: getSize.v(140),
    height: getSize.v(140),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.button.view,
    borderRadius: 16,
    elevation: 5,
  },
  pointerText: {
    position: 'absolute',
    bottom: getSize.v(-50),
    textAlign: 'center',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  buttonConfirm: {
    position: 'absolute',
    bottom: getSize.v(-150),
    marginHorizontal: getSize.s(20),
    left: 0,
    right: 0,
  },
});
