import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Picker } from 'react-native';

import content_styles from '../../assets/styles/content_style';

export default class Skill extends React.Component {

    constructor(props){
        super(props);
        this.setSkill = this.props.set_skill;
        this.setPage = this.props.set_page;
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/skill_logo.png')}
                    />
                    <Text style={styles.title}> What's your ski level? </Text>
                </View>
                
                <View style={styles.inputContainer}>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.props.skill}
                        onValueChange={(itemValue, itemIndex) => this.setSkill(itemValue)}>
                        <Picker.Item label="newbie" value="1" />
                        <Picker.Item label="intermediate" value="2" />
                        <Picker.Item label="veteran" value="3" />
                    </Picker>   
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.subButtonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {this.setPage(2)} }>
                            <Text style={styles.buttonText}> Prev </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {} }>
                            <Text style={styles.buttonText}> Done </Text>
                        </TouchableOpacity>
                    </View>
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