import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export function IconsSocialFacebookF() {
  return (
    <View style={styles.root}>
      <Svg width="8" height="16">
        <Path d="M 8 0 L 8 3 L 6 3 C 5.734783500432968 3 5.480428829789162 3.1053570359945297 5.2928924560546875 3.292893409729004 C 5.105356082320213 3.480429783463478 5 3.734783500432968 5 4 L 5 6 L 8 6 L 8 9 L 5 9 L 5 16 L 2 16 L 2 9 L 0 9 L 0 6 L 2 6 L 2 3.5 C 2 1.559999942779541 3.5700000524520874 0 5.5 0 L 8 0 Z" fill="#222835"/>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: 24,
    height: 24,
    padding: 10,
  },
});

