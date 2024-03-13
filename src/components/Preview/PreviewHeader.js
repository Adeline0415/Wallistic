import React from 'react';
import GlobalStyle from '../../utils/GlobalStyle';
import SelectMode from './Icons/SelectMode';
import BackButton from '../Edit/backButtonWhite';
import { useSelector } from 'react-redux';

import { LinearGradient } from 'expo-linear-gradient';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';



const PreviewHeader = (props) => {
    const {isDarkMode,previewMode} = useSelector(state => state.Mode);
    const currentFolder = useSelector(state => state.Folder.currentFolder);
    const folderList = useSelector(state => state.Folder.folderList);
    const len = folderList.length;
    var i = 0;
    for(i = 0; i < len; i++){
        if(folderList[i].id == currentFolder){
            break;
        }
    }
        return (

            <View style={styles.header}>
                <LinearGradient
                        // Background Linear Gradient
                        colors={['#6D6DD6', '#7A5ED5','#884ED3']}
                        style={styles.linear}
                    />
                <View style={[styles.fullW]}>
                    
                    <View style={styles.headerPurple}>
                        <View style={{width:68
                        }}>
                        <BackButton onPress={props.PressHandler_back} style={{zIndex:2,position:'absolute'}}/>
                        </View>
                        <Text style={styles.textPurple}>
                            {folderList[i].name}
                        </Text>
                        <SelectMode PressHandler = {props.PressHandler_select}/>
                    </View>
                </View>
                
                <View style={styles.headerWhite}>
                    <Text style={previewMode=='Original'? styles.textWhiteFocus : styles.textWhite}>
                        .
                    </Text>
                    <Text style={previewMode=='Home'? styles.textWhiteFocus : styles.textWhite}>
                        .
                    </Text>
                    <Text style={previewMode=='Lock'? styles.textWhiteFocus : styles.textWhite}>
                        .
                    </Text>
                </View>
            </View>
        
            
    )

}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height: 121,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linear: {
        zIndex:1,
        position: 'absolute',
        top:0,
        width:'100%',
        height: 91,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerPurple: {
        width:'95%',
        height: 91,
        Top:0,
        marginLeft: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerWhite: {
        width:'100%',
        zIndex:2,
        position: 'absolute',
        top:91,
        Top:91,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textPurple:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#ffffff',
        
    },
    textWhite:{
        fontSize:  35,
        fontWeight:'bold',
        paddingBottom: 60,
        margin: 2,
        color: '#888888'
    },
    textWhiteFocus:{
        fontSize:  35,
        fontWeight:'bold',
        paddingBottom: 60,
        margin: 2,
        color: '#8569F6',
    },
    fullW:{
        zIndex:2,
        position: 'absolute',
        width:'100%'
    }
})

export default PreviewHeader;