import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class Result extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'Recommand Result',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props){
        super(props);
        this.prop = this.props.navigation.state.params
        this.state = {
            visible: true,
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
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
        flex: 0.5,
        justifyContent: 'center',
    },
    logo: {
        flex: 1,
        resizeMode: 'contain'
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 280,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 16,
    },
    buttonContainer: {
        flex: 0.1,
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: '#2980b9',
        flex:1,
        paddingVertical: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 18
    },
    subButtonContainer: {
        flexDirection:'row',
        flex: 1,
    },
    inputContainer: {
        flex: 0.3,
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'center',
    },
    picker: {
        backgroundColor: '#2980b9',
        color: '#FFF',
    },
})