import React from 'react';import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';
import GlobalStyle from '../utils/GlobalStyle';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

// const totalPins= 0;

const Profile = () => {
    
  const userName = useSelector(state => state.account.userName);
  const isDarkMode = useSelector(state => state.Mode.isDarkMode);
  const totalPins = useSelector(state => state.Pins.totalPins);
  
  return(
        <View style = {[styles.container,isDarkMode ? GlobalStyle.Surface_dark : GlobalStyle.Surface_light]}>
           <Text style={[
                GlobalStyle.Global_title,
                isDarkMode?GlobalStyle.Primary_Linear_p_light_font: GlobalStyle.Primary_Linear_p_font,
                styles.title]} >
                Profile
            </Text>
            <Image source={require('../../assets/img/profile.jpg')}  
                style={styles.image}/>
            <View>
                <LinearGradient
                        // Background Linear Gradient
                        colors={['#6D6DD6', '#7A5ED5','#884ED3']}
                        style={styles.box}
                    />
            </View>
            <View style={styles.box}>
                <Text style={[styles.totalPins,isDarkMode?GlobalStyle.Surface_dark_font:GlobalStyle.Surface_light_font]}>{totalPins}</Text>
                <Text style={{lineHeight:1}}>&nbsp;</Text>
                <Text style={[styles.totalPinsText, isDarkMode?GlobalStyle.Surface_dark_font:GlobalStyle.Surface_light_font]}>Total pins</Text>
            </View>
            <DataTable style={styles.table} >
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={{flex: 3}}>
                        <Text style={[GlobalStyle.Primary_Linear_p_font,styles.tableTitle]}>Name</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{flex: 9}}>
                        <Text style={styles.tableText}>{userName}</Text>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell style={{flex: 3}}>
                        <Text style={[GlobalStyle.Primary_Linear_p_font,styles.tableTitle]}>Email</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{flex: 9}}>
                        <Text style={styles.tableText}>Penpen@gmail.com</Text>
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
            <Pressable >
                <LinearGradient
                            colors={['#6D6DD6', '#7A5ED5','#884ED3']}
                            style={styles.button}
                >
                <Text style={[GlobalStyle.Global_font, styles.buttonText]}>Change password</Text>
                </LinearGradient>
            </Pressable>    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 43,
        marginBottom: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: 277.01,
        height: 600,
        borderRadius: 26,
    },
    table: {
        paddingHorizontal: 30,
    },
    tableText: {
        fontSize: 12,
        fontWeight: 'normal'
    },
    tableTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    row: {
        backgroundColor: '#EEEEEE',
        marginVertical: 7,
        borderRadius: 10,
    },
    box: {
        zIndex:1,
        alignItems: 'center',
        width: 356,
        height: 138,
        borderRadius: 20,
    },
    totalPins:{
        marginTop:80,
        fontSize:14,
        fontWeight: 'bold',
    },
    totalPinsText:{
        lineHeight:12,
        fontSize:12,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width:240,
        height:32.56,
        borderRadius: 30,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 12,
        color:'#ffffff',
    },
    image: {
        zIndex:2,
        position: 'absolute', 
        top: 168, 
        width: 110,
        height: 110,
        borderRadius: 55,
    },
    
});

export default Profile;
