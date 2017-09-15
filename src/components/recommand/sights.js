import React, { Component } from 'react';
import { Text, View } from 'react-native';

import content_styles from '../../assets/styles/content_style';

export default class Sights extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View>
                <Text> This is sights </Text>
            </View>
        );
    }
}