import * as React from 'react';

import { Button } from 'react-native-paper';
import {Text, StyleSheet } from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle';
import { LinearGradient } from 'expo-linear-gradient';

const Medium_Buttons = (props) => (
  <LinearGradient 
  colors={['#6D6DD6', '#7A5ED5','#884ED3']}
  style={styles.button}>
  <Button mode="contained" 
    onPress={props.onPressFunction} 
    labelStyle={props.labelArray}
    buttonColor = 'transparent'
  >
    {props.title}
  </Button>
  </LinearGradient>
);


const styles = StyleSheet.create({
  button: {
      width:68,
      height:23,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default Medium_Buttons;