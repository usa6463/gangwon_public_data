import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class Recommand extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'GWPD',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
            headerRight: (
                <TouchableOpacity onPress={() => {navigation.navigate('Settings')} } >
                    <Image
                        style={navi_styles.settingIcon}
                        source={require('../../assets/images/set.png')}
                    />
                </TouchableOpacity>
            )
        }
    }

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View>
                <Text> Hello </Text>
            </View>
        );
    }
}