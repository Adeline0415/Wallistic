import React from'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity  } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurFolder, updateRecently } from '../actions/Actions';
import { useSelector } from 'react-redux';



const FolderItem   = (props)=>{
    const navigation = useNavigation();
    const folderList = useSelector(state => state.Folder.folderList);
    const dispatch = useDispatch();
    const navigateHandler = () => {
        dispatch(setCurFolder(props.data.id));
        dispatch(updateRecently(props.data.id));
        navigation.navigate('PreviewScreen');
    };
    const image = props.data.image;
    const floderName = props.data.name;
    if(props.data.id==-1){
        return(
            <TouchableOpacity
            style={[styles.container,styles.add]}
            onPress={props.PressHandler}
            >   
            <Text style={styles.addfont} >+</Text>
             </TouchableOpacity>
        )
    }
    else{
        return(
            <TouchableOpacity
              onPress={navigateHandler}
            >
            <View style={styles.container}>
    
                <ImageBackground source={{uri: image}} resizeMode="cover" style={styles.image}>
                <Text style={[props.data.id == 0 ? GlobalStyle.Primary_Linear_p : GlobalStyle.Surface_light, props.data.id == 0 ? styles.text :styles.textPurple
                                ]}>
                            {floderName}
                </Text>
                </ImageBackground>
            </View>
            </TouchableOpacity>
        )
    }

}
const styles = StyleSheet.create({
    addfont:{
        fontSize:50,
        color:'#777777'
    },
    add:{
        backgroundColor:'#DDD',
        alignItems:'center',
    },
    container: {
        //(for debugging)
        marginLeft:5,
        marginRight:5,
        //(for debugging)
        width:127,
        height:174,
        borderRadius:15,
        overflow: 'hidden',
        justifyContent: 'center',
        
    },
    image: {
        
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor:'#DDD',
    },
    text: {
      color: 'white',
      fontSize: 13,
      lineHeight: 41,
      fontWeight: 'bold',
      textAlign: 'center',
      opacity:0.9,
    },
    textPurple: {
        backgroundColor:'#F9F9F9',
      color: '#4726B3',
      fontSize: 13,
      lineHeight: 41,
      fontWeight: 'bold',
      textAlign: 'center',
      opacity:0.9,
    }
  });
  
export default FolderItem