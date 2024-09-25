import React, {useMemo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {getSize} from '../../utils/responsive';
import {TAppHeader} from './type';

export default function ({
  titleContent,
  title,
  lead,
  action,
  onLead,
  onAction,
  titlePosition = 'center',
  titleStyle,
  containerStyle,
}: TAppHeader) {
  // Memoize the action buttons
  const actionButtons = useMemo(() => {
    if (Array.isArray(action)) {
      return action.map((item, index) => (
        <Pressable
          key={index}
          style={styles.svgButton}
          onPress={() => onAction && onAction(index)}>
          {item}
        </Pressable>
      ));
    } else if (action) {
      return (
        <Pressable
          style={styles.svgButton}
          onPress={() => onAction && onAction(0)}>
          {action}
        </Pressable>
      );
    } else return <View style={styles.svgButton} />;
  }, [action, onAction]);

  const titleHeader = useMemo(() => {
    if (titleContent) {
      return titleContent;
    }
    if (title) {
      return (
        <Text style={[styles.title, titleStyle]}>
          {title || 'Default Title'}
        </Text>
      );
    }
    return <></>;
  }, [title, titleContent, titleStyle]);

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Lead Button */}
      {lead ? (
        <Pressable style={styles.svgButton} onPress={onLead}>
          {lead}
        </Pressable>
      ) : (
        <View style={styles.svgButton} />
      )}
      {/* Title */}
      <View
        style={[
          styles.titleContainer,
          titlePosition === 'center'
            ? styles.centered
            : titlePosition === 'left'
            ? styles.leftAligned
            : styles.rightAligned,
        ]}>
        {titleHeader}
      </View>
      {/* Action Buttons */}
      <View style={styles.actionContainer}>{actionButtons}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: getSize.v(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  svgButton: {
    width: getSize.v(40),
    height: getSize.s(40),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center',
  },
  leftAligned: {
    alignItems: 'flex-start',
  },
  rightAligned: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: getSize.s(20),
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
