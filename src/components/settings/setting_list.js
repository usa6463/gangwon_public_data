import React, { Component } from 'react';
import { View, Image, Alert } from 'react-native';
import setting_styles from '../../assets/styles/settings_style';
import navi_styles from '../../assets/styles/navi_style';
import SettingsList from 'react-native-settings-list';

export default class SettingList extends React.Component{
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'Settings',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{backgroundColor:'#EFEFF4',flex:1}}>
                <View style={{backgroundColor:'#EFEFF4',flex:1}}>
                    <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                        <SettingsList.Header headerStyle={{marginTop:15}}/>
                        <SettingsList.Item
                            icon={<Image style={styles.settingIcon} source={require('../../assets/images/temp_logo.png')}/>}
                            title='Logout'
                            onPress={() => Alert.alert('need logout funtion')}
                        />
                        <SettingsList.Item
                            icon={<Image style={styles.settingIcon} source={require('../../assets/images/temp_logo.png')}/>}
                            title='App Info'
                            onPress={() => Alert.alert('App Info Page')}
                        />
                        <SettingsList.Header headerStyle={{marginTop:15}}/>
                    </SettingsList>
                </View>
            </View>
        );
    }
}

