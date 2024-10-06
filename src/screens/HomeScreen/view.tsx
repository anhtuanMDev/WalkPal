import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getSize} from '../../utils/responsive';
import AppTitleHeader from '../../components/AppTitleHeader';
import {textStyle} from '../../utils/textStyle';
import dayjs from 'dayjs';
import DateTimePicker from 'react-native-ui-datepicker';
import {CalendarCoverSVG} from '../../assets/svg';
import AppButtonFill from '../../components/AppButtonFill';
import QuickProfile from '../../components/QuickProfile';
import {COLOR} from '../../utils/colorEnum';

const HomeScreenView = () => {
  const {top} = useSafeAreaInsets();
  const [date, setDate] = useState(dayjs());
  return (
    <ScrollView style={{marginTop: top}}>
      <View style={[styles.container]}>
        <View style={styles.headerRowView}>
          <AppTitleHeader
            title="Walk with ME"
            titleStyle={textStyle.header.hb6}
            content="Your next Schedule is"
            contentStyle={textStyle.header.h8}
            containerStyle={styles.headerContainer}
          />

          <AppButtonFill />
        </View>

        {/* <CalendarCoverSVG size={getSize.s(150)}/> */}

        <View
          style={{
            width: '85%',
            backgroundColor: 'white',
            paddingHorizontal: 16,
            paddingTop: 10,
            alignSelf: 'center',
            elevation: 5,
            borderRadius: 16,
          }}>
          <DateTimePicker
            mode="single"
            date={date}
            headerButtonColor={COLOR.button.royalBlue}
            headerButtonSize={16}
            headerButtonsPosition="right"
            headerButtonStyle={{
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 5,
              elevation: 5,
            }}
            todayContainerStyle={{
              width: 40,
              height: 40,
              borderRadius: 5,
              borderColor: COLOR.button.royalBlue,
            }}
            dayContainerStyle={{
              width: 40,
              height: 40,
              borderRadius: 5,
              borderColor: 'transparent',
            }}
            onChange={params => setDate(dayjs(params.date))}
          />
        </View>

        <AppTitleHeader
          title="Available Partner"
          titleStyle={textStyle.header.hb8}
          containerStyle={styles.headerContainer}
        />

        <QuickProfile />

        <AppTitleHeader
          title="Available offers"
          titleStyle={textStyle.header.hb8}
          containerStyle={styles.headerContainer}
        />

        <QuickProfile />
      </View>
    </ScrollView>
  );
};

export default HomeScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: getSize.s(16),
  },
  headerRowView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: getSize.v(16),
  },
  headerContainer: {marginTop: getSize.v(10)},
});
