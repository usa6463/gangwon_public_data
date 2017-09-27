import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards' // https://www.npmjs.com/package/react-native-material-cards

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class ResortDetail extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'ResortDetail',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props){
        super(props);
        this.prop = this.props.navigation.state.params
        this.state = {
            visible : true,
            img_link : 'http://placehold.it/480x270',
        };
    }
    
    render() {
        return (
            // <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Card>
                        <CardImage source={{uri: this.state.img_link}} />
                        <CardTitle title= "소개" />
                        <CardContent text={this.prop.total.CONTENT}/>
                    </Card>

                    <Card>
                        
                        <CardTitle title= "날씨" />
                        <CardContent text={this.prop.total.CONTENT}/>
                    </Card>

                    <Card>
                        <CardImage source={require('../../assets/images/pay.jpg')} />
                        <CardTitle title= "이용 요금" />
                        <CardContent text={this.prop.total.CONTENT}/>
                    </Card>

                    <Card>
                        <CardImage source={require('../../assets/images/slope.jpg')}/>
                        <CardTitle title= "슬로프" />
                        <CardContent text={this.prop.total.CONTENT}/>
                    </Card>
                </ScrollView>
            </View>
            
        );
    }

    componentDidMount(){
        let search_name = encodeURIComponent(this.prop.total.SUBJECT);
        let myApiUrl = "https://openapi.naver.com/v1/search/image.json?query=" + search_name +"&display=1&start=1&sort=sim&filter=all";
        fetch(`${myApiUrl}`, {  
        method : 'GET',
        headers : {
            'X-Naver-Client-Id' : "IDilnLYgUDEqs6N6cIiw",
            'X-Naver-Client-Secret' : "aUDG50tsmD",
        },        
        }).then(response =>{
            let obj = JSON.parse(response._bodyInit);
            this.setState({
                img_link: obj.items[0].link
            });
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    title_container: {
        flex: 0.4,
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_text: {
        color: '#FFF',
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 16,
    },
    title_img: {
        borderRadius: 50,
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    scroll: {
        flex: 0.6,
    },
    card_image: {
        color: 'rgba(52, 52, 52, 0.7)',
        
    },
})