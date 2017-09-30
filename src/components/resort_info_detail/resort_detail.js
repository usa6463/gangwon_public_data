import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Slider } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards' // https://www.npmjs.com/package/react-native-material-cards

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style';

import { current_weather, n_days_weather, weatherImage, dayofweek, getWeatherView, long_weather, getLongWeatherView } from './weather_info'
import Moment from 'moment'

var numberFormat = (num) => {
    if (num < 10) return '0' + num;
    else return num;
}

var round_down = (num) => {
    res = num - num.toFixed(0);
    if (res < 0) res = 1 + res;
    num = num - res;
    return num;
}

var slider_gradation = (cur_date, next_hour) => {
    let tmp_num = next_hour+3;
    let isVisible = false;
    var tmp_view = [];

    for (let i = 0; i < 7; i++) {
        if(tmp_num == 24 || tmp_num == 27 || tmp_num == 30) {
            tmp_num -= 24;
            hide = 14;
            cur_date = Moment(cur_date).add(1, 'days');
        } else {
            hide = 0;
        }
        tmp_num += 6;
        tmp_view.push(<Text key={i} style={{ fontSize: 12, textAlignVertical: 'top', textAlign: 'center', marginRight: 1, height:hide }}>{Moment(cur_date).format('MM/DD')}</Text>)
    }
    return (
        <View style={{ marginLeft: 5, marginRight: 5, marginTop: 10  }}
            justifyContent='space-between'
            flexDirection='row'>
            <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'left', textAlignVertical: 'center', height:0, marginHorizontal:9 }}>now</Text>
            {tmp_view}
        </View>
    )
}

var slider_gradation2 = (next_hour) => {
    var tmp_view = [];

    for (let i = 0; i < 7; i++) {
        tmp_view.push(<Text key={i} style={{ fontSize: 12, textAlignVertical: 'center', textAlign: 'center', marginRight: 1 }}>{numberFormat((next_hour + 6 * i + 3) % 24)}</Text>)
    }
    return (
        <View style={{ marginLeft: 5, marginRight: 5, marginBottom: 10 }}
            justifyContent='space-between'
            flexDirection='row'>
            <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'left', textAlignVertical: 'center' }}>now</Text>
            {tmp_view}
        </View>
    )
}

export default class ResortDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'ResortDetail',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props) {
        super(props);
        this.prop = this.props.navigation.state.params
        this.state = {
            visible: true,
            img_link: 'http://placehold.it/480x270',
            cur_weather: current_weather,
            next_weather: n_days_weather,
            tmp_weather: current_weather,
            l_weather: long_weather,
            slider_value: 0
        };
    }

    render() {
        let next_hour = round_down(parseInt(Moment(this.state.cur_weather.minutely[0].timeObservation).format('HH')) / 3 + 1) * 3
        let cur_date = Moment(this.state.cur_weather.minutely[0].timeObservation).format('YYYY-MM-DD');

        return (
            // <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Card>
                        <CardImage source={{ uri: this.state.img_link }} />
                        <CardTitle title="소개" />
                        <CardContent text={this.prop.total.CONTENT} />
                    </Card>
                    <Card>
                        <CardTitle title="날씨" />
                        <CardContent>
                            {getWeatherView(this.state.tmp_weather, this.state.slider_value, cur_date, next_hour)}

                            <View style={{borderWidth:1, marginVertical:10, borderColor:'#aaaaaa', borderRadius:10}}
                                >
                                {slider_gradation(cur_date, next_hour)}
                                <Slider
                                    maximumValue={42}
                                    minimumValue={0}
                                    step={3}
                                    onValueChange={(value) => {
                                        if (value == 0) this.setState({ slider_value: value, tmp_weather: this.state.cur_weather })
                                        else this.setState({ slider_value: value, tmp_weather: this.state.next_weather })
                                    }}
                                    touchDimensions={{ height: 50, width: 50, borderRadius: 10}} >
                                </Slider>
                                {slider_gradation2(next_hour)}
                            </View>

                            {getLongWeatherView(this.state.l_weather, cur_date)}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardImage source={require('../../assets/images/pay.jpg')} />
                        <CardTitle title="이용 요금" />
                        <CardContent text={this.prop.total.CONTENT} />
                    </Card>

                    <Card>
                        <CardImage source={require('../../assets/images/slope.jpg')} />
                        <CardTitle title="슬로프" />
                        <CardContent text={this.prop.total.CONTENT} />
                    </Card>
                </ScrollView>
            </View >

        );
    }

    componentDidMount() {
        let search_name = encodeURIComponent(this.prop.total.SUBJECT);
        let myApiUrl = "https://openapi.naver.com/v1/search/image.json?query=" + search_name + "&display=1&start=1&sort=sim&filter=all";
        fetch(`${myApiUrl}`, {
            method: 'GET',
            headers: {
                'X-Naver-Client-Id': "IDilnLYgUDEqs6N6cIiw",
                'X-Naver-Client-Secret': "aUDG50tsmD",
            },
        }).then(response => {
            let obj = JSON.parse(response._bodyInit);
            this.setState({
                img_link: obj.items[0].link
            });
        })

        var latitude = this.prop.latlng.latitude;
        var longitude = this.prop.latlng.longitude;
        let cur_weatherUrl = "http://apis.skplanetx.com/weather/current/minutely?lon=" +longitude+"&village=&county=&lat=" + latitude + "&city=&version=1&stnid=";
        fetch(`${cur_weatherUrl}`, {
            method: 'GET',
            headers: {
                'appKey': 'a11eb484-6f40-3159-9295-a12c4fb2e124',
            },
        }).then(response => {
            let obj = JSON.parse(response._bodyInit);
            this.setState({ cur_weather: obj.weather,
                            tmp_weather: obj.weather })
        })
        let next_weatherUrl = "http://apis.skplanetx.com/weather/forecast/3days?version=1&lat=" + latitude + "&lon=" + longitude + "&city=&county=&village=&foretxt=Y";
        fetch(`${next_weatherUrl}`, {
            method: 'GET',
            headers: {
                'appKey': 'a11eb484-6f40-3159-9295-a12c4fb2e124',
            },
        }).then(response => {
            let obj = JSON.parse(response._bodyInit);
            this.setState({ next_weather: obj.weather });
        })

        let long_weatherUrl = "http://apis.skplanetx.com/weather/forecast/6days?version=1&lat=" + latitude + "&lon=" + longitude + "&city=&county=&village=&foretxt=Y";
        fetch(`${long_weatherUrl}`, {
            method: 'GET',
            headers: {
                'appKey': 'a11eb484-6f40-3159-9295-a12c4fb2e124',
            },
            
        }).then(response => {
            let obj = JSON.parse(response._bodyInit);
            this.setState({ l_weather: obj.weather });
        })


        // let myApiUrl = "http://data.gwd.go.kr/apiservice/734a677953757361387467517772/json/tourdb-tourist_attraction-leisure_sports-kr/1/200";
        // fetch(`${myApiUrl}`, {  
        // method: 'GET',
        // }).then(response =>{
        //     let obj = JSON.parse(response._bodyInit);
        //     let row = obj[Object.keys(obj)[0]].row;
        //     row.map(dict => {
        //         this.state.resort_name.map(name => {
        //             if(dict.SUBJECT.search(name) >= 0 ){
        //                 temp = {
        //                     name : dict.CONTENT_ID,
        //                     latlng :{
        //                         latitude: Number(dict.LAT),
        //                         longitude: Number(dict.LNG)
        //                     },
        //                     title : dict.SUBJECT,
        //                     description : dict.SMGW_ADDRESS_S,
        //                 }
        //                 this.state.markers.push(temp);
        //             }
        //         })
        //     });
        //     this.setState({
        //         visible: !this.state.visible
        //     });
        // })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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