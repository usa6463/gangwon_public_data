import React, { Component } from 'react';
import { Text, View, FlatList, List, StyleSheet, Image } from 'react-native';

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
        this.kor_to_eng = {
            '한식' : require('../../assets/images/food_kor.png'),
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.restaurants}
                    keyExtractor={item => ''+item.CONTENT_ID}
                    renderItem={({item}) => (
                        <View style={styles.list_item}>
                            <Image
                                key={item.SUBJECT}
                                style={styles.avatar}
                                source={require(this.kor_to_eng[item.SMGW_SUBJECT_S])}
                            />
                            <View style={styles.title_container}>
                                <Text> {item.SUBJECT} </Text>
                                <Text> {item.SMGW_ADDRESS_S} </Text>
                                <Text> {item.SMGW_SUBJECT_S} </Text>
                            </View>

                        </View>
                    )}
                />
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
    list_item: {
        flex:1,
        flexDirection: 'row',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
    }
});
