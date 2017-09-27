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
                                source={{uri : item.img_link}}
                            />
                            <View style={styles.title_container}>
                                <Text style={styles.title_text}> {item.SUBJECT} </Text>
                                <Text style={styles.sub_title_text}> {item.SMGW_ADDRESS_S} </Text>
                                <Text style={styles.sub_title_text}> {item.SMGW_SUBJECT_S} </Text>
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
                let search_name = encodeURIComponent(dict.SUBJECT);
                let myApiUrl = "https://openapi.naver.com/v1/search/image.json?query=" + search_name +"&display=1&start=1&sort=sim&filter=all";
                fetch(`${myApiUrl}`, {  
                method : 'GET',
                headers : {
                    'X-Naver-Client-Id' : "IDilnLYgUDEqs6N6cIiw",
                    'X-Naver-Client-Secret' : "aUDG50tsmD",
                },        
                }).then(response =>{
                    let search_result = JSON.parse(response._bodyInit);
                    if(search_result.items.length>0){
                        dict['img_link'] = search_result.items[0].link
                    }
                    else{
                        dict['img_link'] = 'http://placehold.it/140x100'
                    }
                    
                    var restaurants = this.state.restaurants.slice()
                    restaurants.push(dict)
                    this.setState({ restaurants: restaurants })
                })
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
        backgroundColor: '#ecf0f1',
        borderColor: 'black',
        borderBottomWidth: 1,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 8,
        marginLeft: 8,
    },
    title_text: {
        color: 'black',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 4,
        marginTop: 6,
    },
    sub_title_text: {
        marginBottom: 2,
    }
});
