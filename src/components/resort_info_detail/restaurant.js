import React, { Component } from 'react';
import { Text, View, FlatList, List, StyleSheet, } from 'react-native';

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class Restaurant extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'Restaurant',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props){
        super(props);
        this.prop = this.props.navigation.state.params
        this.state = {
            restaurants : [
            ],
            visible : true,
        };
    }
    
    render() {
        return (
            <View>
                {/* <Text> HI {this.state.restaurants[0].SMGW_SUBJECT_S}</Text> */}
                {this.state.restaurants.map(iter =>(
                    <Text> Hello</Text>
                ))}
                
            </View>
        );
    }

    componentWillMount(){
        let myApiUrl = "http://data.gwd.go.kr/apiservice/734a677953757361387467517772/json/tourdb-restaurant-korean_food-kr/1/2";
        fetch(`${myApiUrl}`, {
            method: 'GET',
        }).then(response =>{
            let obj = JSON.parse(response._bodyInit);
            let row = obj[Object.keys(obj)[0]].row;

            row.map(dict => {
                var restaurants = this.state.restaurants.slice()
                restaurants.push(dict)
                this.setState({ restaurants: restaurants })
            })
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});
