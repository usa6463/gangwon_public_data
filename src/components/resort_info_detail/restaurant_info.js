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
            img_link : this.prop.img_link,
        };
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