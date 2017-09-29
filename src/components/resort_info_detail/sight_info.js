import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards' // https://www.npmjs.com/package/react-native-material-cards

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class SightInfo extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: '관광지 정보',
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
        let search_name = encodeURIComponent(this.prop.SUBJECT);
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
                        <CardImage source={{uri: this.state.img_link}} title={this.prop.SUBJECT} />
                        <CardTitle title= "소개" />
                        <CardContent text={this.prop.CONTENT}/>
                    </Card>

                    <Card>
                        <CardTitle title= "주소" />
                        <CardContent text={this.prop.SMGW_ADDRESS_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "홈페이지" />
                        <CardContent text={this.prop.SMGW_HOMEPAGE_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "전화번호" />
                        <CardContent text={this.prop.SMGW_CONTACT_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "시설 사용 요금" />
                        <CardContent text={this.prop.SMGW_CHARGES_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "주차시설" />
                        <CardContent text={`${this.prop.SMGW_PARKING_S} / ${this.prop.SMGW_PARKINGFEE_S}`}/>
                    </Card>

                    <Card>
                        <CardTitle title= "이용 시간" />
                        <CardContent text={this.prop.SMGW_TIME_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "휴무일" />
                        <CardContent text={this.prop.SMGW_HOLIDAY_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "관광가이드" />
                        <CardContent text={this.prop.SMGW_GUIDE_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "관광팁" />
                        <CardContent text={this.prop.SMGW_TIPS_T}/>
                    </Card>

                    <Card>
                        <CardTitle title= "추천계절" />
                        <CardContent text={this.prop.SMGW_RECOMMEND_S}/>
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