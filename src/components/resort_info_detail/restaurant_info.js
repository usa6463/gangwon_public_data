import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards' // https://www.npmjs.com/package/react-native-material-cards

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class RestaurantInfo extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: '식당 정보',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props){
        super(props);
        this.prop = this.props.navigation.state.params
        this.state = {
            visible : true,
            img_link : 'http://placehold.it/140x100',
        };
    }

    componentWillMount(){
        let search_name = encodeURIComponent(this.prop.GR_NM);
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
                this.setState({ img_link: search_result.items[0].link })
            }
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Card>
                        <CardImage source={{uri: this.state.img_link}} title={this.prop.GR_NM} />
                        <CardTitle title= "메인 메뉴" />
                        <CardContent text={this.prop.MAIN_MENU}/>
                    </Card>

                    <Card>
                        <CardTitle title= "주소" />
                        <CardContent text={this.prop.ROAD_ADDRESS}/>
                    </Card>

                    <Card>
                        <CardTitle title= "전화번호" />
                        <CardContent text={this.prop.PHONE_NO}/>
                    </Card>

                    <Card>
                        <CardTitle title= "운영 시간" />
                        <CardContent text={this.prop.MANAGE_TM}/>
                    </Card>

                    <Card>
                        <CardTitle title= "주차시설" />
                        <CardContent text={`${this.prop.PARKING_YN	}`}/>
                    </Card>

                </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    scroll: {
        flex: 1,
    },
})