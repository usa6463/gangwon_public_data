import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

import Days from './recommand_pages/days';

export default class Recommand extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'Recommand',
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

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} />;
    }
    
    render() {
        return (
            <View style={{flex:1}}>
                <Text> Hello </Text>
            </View>
        );
    }
}