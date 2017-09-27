import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

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
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/home_logo.png')}
                    />
                    <Text style={styles.title}> gangwon ski resort guide app made by PKNU CE </Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Recommand')} }>
                        <Text style={styles.buttonText}> 여행 코스 추천</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        flex: 0.8,
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 150
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 220,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 16,
    },
    buttonContainer: {
        flex: 0.2,
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 18
    },
})