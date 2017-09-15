import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Picker } from 'react-native';

import content_styles from '../../assets/styles/content_style';

export default class Days extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/days_logo.png')}
                    />
                    <Text style={styles.title}> How many days do you want to stay? </Text>
                </View>
                
                <View style={styles.inputContainer}>
                    <Text> this is input container</Text>
                    {/* <Picker
                        selectedValue={this.state.language}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>    */}
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {} }>
                        <Text style={styles.buttonText}> Next </Text>
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
        flex: 0.5,
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 200
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
    inputContainer: {
        alignItems: 'center',
        flex: 0.3,
        justifyContent: 'center',
    },
})