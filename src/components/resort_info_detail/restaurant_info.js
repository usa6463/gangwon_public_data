import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
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
            // <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
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
                        <CardTitle title= "전화번호" />
                        <CardContent text={this.prop.SMGW_CONTACT_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "이용시간" />
                        <CardContent text={this.prop.SMGW_TIME_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "휴무일" />
                        <CardContent text={this.prop.SMGW_HOLIDAY_S}/>
                    </Card>

                    <Card>
                        <CardTitle title= "주차시설" />
                        <CardContent text={`${this.prop.SMGW_PARKING_S} / ${this.prop.SMGW_PARKINGFEE_S}`}/>
                    </Card>

                    <Card>
                        <CardTitle title= "주변명소" />
                        <CardContent text={this.prop.SMGW_ATTRACTION_S}/>
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