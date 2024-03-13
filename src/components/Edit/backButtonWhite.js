import * as React from 'react';
import { Appbar } from 'react-native-paper';
import GlobalStyle from '../../utils/GlobalStyle';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, TouchableHighlight, SafeAreaView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function BackButton(props) {
    return(
        
        <Appbar.BackAction
            onPress={props.onPress} 
            size={15}
            {...GlobalStyle.Surface_dark_font}
        />
    );
        
};
export default BackButton;

