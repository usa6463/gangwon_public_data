import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards' // https://www.npmjs.com/package/react-native-material-cards

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class ResortDetail extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: '스키장 정보',
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

        this.slope = [
            require('../../assets/images/slope/high_one.png'),
            require('../../assets/images/slope/yongpyung.png'),
            require('../../assets/images/slope/elisian.png'),
            require('../../assets/images/slope/daemyung.png'),
            require('../../assets/images/slope/phoenix.png'),
            require('../../assets/images/slope/welihili.png'),
            require('../../assets/images/slope/alpensia.png'),
            require('../../assets/images/slope/o2.png'),
            require('../../assets/images/slope/orc.png'),
        ]

        this.fee = [
            require('../../assets/images/fee/high_one.png'),
            require('../../assets/images/fee/yongpyung.png'),
            require('../../assets/images/fee/elisian.png'),
            require('../../assets/images/fee/daemyung.png'),
            require('../../assets/images/fee/phoenix.png'),
            require('../../assets/images/fee/welihili.png'),
            require('../../assets/images/fee/alpensia.png'),
            require('../../assets/images/fee/o2.png'),
            require('../../assets/images/fee/orc.png'),
        ]
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
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
                        <Text style={styles.card_text}>이용 요금</Text>
                        <ScrollView horizontal={true}>
                            <Image
                                resizeMode="contain"
                                style={styles.card_image}
                                source={this.fee[this.prop.total.CONTENT_ID]}
                            />
                        </ScrollView>
                    </Card>

                    <Card>
                        <Text style={styles.card_text}>슬로프</Text>
                        <ScrollView horizontal={true}>
                            <Image
                                resizeMode="contain"
                                style={styles.card_image}
                                source={this.slope[this.prop.total.CONTENT_ID]}
                            />
                        </ScrollView>
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

            this.setState({
                visible: !this.state.visible
            });
        })
    }
}

var { height, width } = Dimensions.get('window');

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
        flex: 1,
    },
    card_image: {
        // width: width,
        // height: height,
        // resizeMode:'stretch'
    },
    card_scroll: {
        flex:1,
    },
    card_text: {
        alignItems: 'flex-start',
        paddingRight: 16,
        paddingLeft: 16,
        paddingBottom: 16,
        paddingTop: 16,
        fontSize: 24,
        color: 'rgba(0 ,0 ,0 , 0.87)'
    }
})