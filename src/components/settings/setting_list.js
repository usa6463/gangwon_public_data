import React, { Component } from 'react';
import { View, Image, Alert } from 'react-native';
import styles from '../../assets/styles/SettingsStyle';
import SettingsList from 'react-native-settings-list';

export default class SettingList extends React.Component{

    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'SETTINGS',
            headerStyle:{ backgroundColor: '#2c3e50'},
            headerTitleStyle:{ color: 'white'},
        }
    };

    constructor(props){
        super(props);
    }

    render(){
        var bgColor = '#DCE3F4';
        return(
                <View style={{backgroundColor:'#EFEFF4',flex:1}}>
                    <View style={{backgroundColor:'#EFEFF4',flex:1}}>
                        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                        <SettingsList.Header headerStyle={{marginTop:15}}/>
                        <SettingsList.Item
                            icon={<Image style={styles.imageStyle} source={require('../../assets/images/temp_logo.png')}/>}
                            title='Logout'
                            onPress={() => Alert.alert('need logout funtion')}
                        />
                        <SettingsList.Item
                            icon={<Image style={styles.imageStyle} source={require('../../assets/images/temp_logo.png')}/>}
                            title='App Info'
                            onPress={() => Alert.alert('App Info Page')}
                        />
                        <SettingsList.Header headerStyle={{marginTop:15}}/>
                        </SettingsList>
                    </View>
                </View>
            );
    }

    onValueChange(value){
        this.setState({switchValue: value});
    }
}

