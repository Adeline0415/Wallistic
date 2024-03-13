import * as React from 'react';
import { Appbar } from 'react-native-paper';
import GlobalStyle from '../../utils/GlobalStyle';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, TouchableHighlight, SafeAreaView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function BackButton(props) {
    return(
        <LinearGradient 
        colors={['#6D6DD6', '#7A5ED5','#884ED3']}
        style={styles.button}>
        <Appbar.BackAction
            onPress={props.onPress} 
            size={15}
            iconColor={'white'}
           
        />
        </LinearGradient>
    );
        
};

const styles = StyleSheet.create({
    button: {
        width:25,
        height:25,
        borderRadius: 9,
        marginLeft:15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default BackButton;

