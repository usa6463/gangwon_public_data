import React, { Component } from 'react';
import { Text, View, } from 'react-native';

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class Recommand extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'DashBoard',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View>
                <Text style={{alignItems: 'center'}}> This is dashboard </Text>
            </View>
        );
    }
}