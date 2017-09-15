import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Picker } from 'react-native';

import content_styles from '../../assets/styles/content_style';

export default class Days extends React.Component {

    constructor(props){
        super(props);
        this.setDays = this.props.set_days;
        this.setPage = this.props.set_page;
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
                    <Picker
                        style={styles.picker}
                        selectedValue={this.props.days}
                        onValueChange={(itemValue, itemIndex) => this.setDays(itemValue)}>
                        <Picker.Item label="1 day" value="1" />
                        <Picker.Item label="2 days" value="2" />
                        <Picker.Item label="3 days" value="3" />
                        <Picker.Item label="4 days" value="4" />
                        <Picker.Item label="5 days" value="5" />
                    </Picker>   
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {this.setPage(1)} }>
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