import Moment from 'moment'
import { View, Image, Text, ScrollView } from 'react-native'
import React, { Component } from 'react';

let current_weather = {
    "minutely": [
        {
            "station": {
                "name": "서울",
                "id": "108",
                "type": "KMA",
                "latitude": "37.5714000000",
                "longitude": "126.9658000000"
            },
            "wind": {
                "wdir": "265.60",
                "wspd": "4.90"
            },
            "precipitation": {
                "type": "0",
                "sinceOntime": "0.00"
            },
            "sky": {
                "name": "맑음",
                "code": "SKY_A01"
            },
            "rain": {
                "sinceOntime": "0.00",
                "sinceMidnight": "0.00",
                "last10min": "0.00",
                "last15min": "0.00",
                "last30min": "0.00",
                "last1hour": "0.00",
                "last6hour": "0.00",
                "last12hour": "0.00",
                "last24hour": "0.00"
            },
            "temperature": {
                "tc": "7.20",
                "tmax": "7.00",
                "tmin": "-1.00"
            },
            "wind": {
                "wdir": "11",
                "wspd": "22"
            },
            "humidity": "24.90",
            "pressure": {
                "surface": "1010.30",
                "seaLevel": "1020.80"
            },
            "lightning": "0",
            "timeObservation": "2013-11-11 13:52:00"
        }
    ]
}

let n_days_weather = {
    "forecast3days": [
        {
            "grid": {
                "latitude": "",
                "longitude": "",
                "city": "",
                "county": "",
                "village": ""
            },
            "fcst3hour": {
                "wind": {
                    "wspd4hour": "",
                    "wspd7hour": "",
                    "wspd10hour": "",
                    "wspd13hour": "",
                    "wspd16hour": "",
                    "wspd19hour": "",
                    "wspd22hour": "",
                    "wspd25hour": "",
                    "wspd28hour": "",
                    "wspd31hour": "",
                    "wspd34hour": "",
                    "wspd37hour": "",
                    "wspd40hour": "",
                    "wspd43hour": "",
                    "wspd46hour": "",

                },
                "precipitation": {

                },
                "sky": {
                    "code4hour": "",
                    "name4hour": "",
                    "code7hour": "",
                    "name7hour": "",
                    "code10hour": "",
                    "name10hour": "",
                    "code13hour": "",
                    "name13hour": "",
                    "code16hour": "",
                    "name16hour": "",
                    "code19hour": "",
                    "name19hour": "",
                    "code22hour": "",
                    "name22hour": "",
                    "code25hour": "",
                    "name25hour": "",
                    "code28hour": "",
                    "name28hour": "",
                    "code31hour": "",
                    "name31hour": "",
                    "code34hour": "",
                    "name34hour": "",
                    "code37hour": "",
                    "name37hour": "",
                    "code40hour": "",
                    "name40hour": "",
                    "code43hour": "",
                    "name43hour": "",
                    "code46hour": "",
                    "name46hour": "",

                },
                "temperature": {
                    "temp4hour": "",
                    "temp7hour": "",
                    "temp10hour": "",
                    "temp13hour": "",
                    "temp16hour": "",
                    "temp19hour": "",
                    "temp22hour": "",
                    "temp25hour": "",
                    "temp28hour": "",
                    "temp31hour": "",
                    "temp34hour": "",
                    "temp37hour": "",
                    "temp40hour": "",
                    "temp43hour": "",
                    "temp46hour": "",

                },
                "humidity": {
                    "rh4hour": "",
                    "rh7hour": "",
                    "rh10hour": "",
                    "rh13hour": "",
                    "rh16hour": "",
                    "rh19hour": "",
                    "rh22hour": "",
                    "rh25hour": "",
                    "rh28hour": "",
                    "rh31hour": "",
                    "rh34hour": "",
                    "rh37hour": "",
                    "rh40hour": "",
                    "rh43hour": "",
                    "rh46hour": "",

                }
            },
            "fcst6hour": {

            },
            "fcstdaily": {
                "temperature": {
                    "tmax1day": "",
                    "tmin1day": "",
                    "tmax2day": "",
                    "tmin2day": "",
                    "tmax3day": "",
                    "tmin3day": "",
                }
            },
            "fcstext": {
                "locationName": "",
                "text1": "",
                "text2": "",
                "text3": "",
                "wn": "",
                "wr": "",
                "timeRelease": ""
            },
            "fcstextRegion": {
                "locationName": "",
                "text1": "",
                "text2": "",
                "text3": "",
                "wn": "",
                "wr": "",
                "timeRelease": ""
            },
            "timeRelease": ""
        }
    ]
}

let long_weather = {
    "forecast6days":
    [
        {
            "grid":
            {
                "city": "서울",
                "county": "서초구",
                "village": "서초3동"
            },
            "location":
            {
                "name": "서울"
            },
            "sky":
            {
                "amCode3day": "SKY_W09",
                "amName3day": "구름많고 비",
                "pmCode3day": "SKY_W02",
                "pmName3day": "구름조금",
                "amCode4day": "SKY_W01",
                "amName4day": "맑음",
                "pmCode4day": "SKY_W01",
                "pmName4day": "맑음",
                "amCode5day": "SKY_W01",
                "amName5day": "맑음",
                "pmCode5day": "SKY_W01",
                "pmName5day": "맑음",
                "amCode6day": "SKY_W02",
                "amName6day": "구름조금",
                "pmCode6day": "SKY_W03",
                "pmName6day": "구름많음",
                "amCode7day": "SKY_W09",
                "amName7day": "구름많고 비",
                "pmCode7day": "SKY_W09",
                "pmName7day": "구름많고 비",
                "pmCode8day": "SKY_W09",
                "pmName8day": "구름많고 비",
                "pmCode9day": "SKY_W09",
                "pmName9day": "구름많고 비",
                "pmCode10day": "SKY_W09",
                "pmName10day": "구름많고 비"
            },
            "temperature":
            {
                "tmax3day": "8",
                "tmax4day": "10",
                "tmax5day": "12",
                "tmax6day": "13",
                "tmax7day": "14",
                "tmax8day": "14",
                "tmax9day": "14",
                "tmax10day": "14",
                "tmin3day": "5",
                "tmin4day": "1",
                "tmin5day": "0",
                "tmin6day": "3",
                "tmin7day": "6",
                "tmin8day": "6",
                "tmin9day": "6",
                "tmin10day": "6",
            },
            "timeRelease": ""
        }
    ]

}
var weatherImage = [
    require('../../assets/images/weather_icon/맑음.png'),
    require('../../assets/images/weather_icon/구름조금.png'),
    require('../../assets/images/weather_icon/구름많음.png'),
    require('../../assets/images/weather_icon/비.png'),
    require('../../assets/images/weather_icon/눈.png'),
    require('../../assets/images/weather_icon/비눈.png'),
    require('../../assets/images/weather_icon/흐림.png'),
    require('../../assets/images/weather_icon/비.png'),
    require('../../assets/images/weather_icon/눈.png'),
    require('../../assets/images/weather_icon/비눈.png'),
    require('../../assets/images/weather_icon/번개.png'),
    require('../../assets/images/weather_icon/번개비.png'),
    require('../../assets/images/weather_icon/번개눈.png'),
    require('../../assets/images/weather_icon/번개비눈.png'),
]

var dayofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var getLongWeatherView = (l_weather, cur_date) => {
    var tmp_view = [];
    for (let i = 3; i <= 7; i++) {
        tmp_view.push(
            <View
                key={i}
                justifyContent='center'
                alignItems='center'
                flexDirection='row'
                style={{ height: 60 }}>
                <Text style={{ flex: 0.5, fontSize: 15 }}>{Moment(cur_date).add(i, 'days').format('MM/DD')
                    + "  " + dayofweek[Moment(cur_date).add(i, 'days').day() % 7]}</Text>
                <Image
                    style={{ flex: 0.2, width: 40, height: 60 }}
                    source={weatherImage[parseInt((l_weather.forecast6days[0].sky[`pmCode${i}day`]).substring(6, 7)) - 1]} />
                <Text style={{ flex: 0.3, textAlign: 'right', marginRight: 5, fontSize: 15 }}>{parseInt(l_weather.forecast6days[0].temperature[`tmax${i}day`])}º/
                    {parseInt(l_weather.forecast6days[0].temperature[`tmin${i}day`])}º
            </Text>
            </View>
        )
    }
    return (
        <View
            justifyContent='center'
            alignItems='flex-start'
            flexDirection='column'>
            {tmp_view}
        </View>
    )
}
var getWeatherView = (weather, value, cur_date, next_hour) => {
    if (value == 0) {
        return (
            <View flex={0.5} style={{ marginBottom: 20 }}>
                <Text> {
                    Moment(weather.minutely[0].timeObservation).format('YYYY/MM/DD  HH:mm') + "(현재)  "
                    + dayofweek[(Moment(weather.minutely[0].timeObservation).day()) % 7] + ",  " +
                    weather.minutely[0].sky.name}</Text>
                <View
                    justifyContent='space-around'
                    alignItems='center'
                    flexDirection='row'>
                    <View
                        flexDirection='row'
                        alignItems='flex-start'>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 80,
                        }}>
                            {parseInt(weather.minutely[0].temperature.tc)}</Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 45,
                            marginTop: 10
                        }}>
                            ℃</Text>
                    </View>
                    <Image
                        flex={0.5}
                        style={{ width: 140, height: 140 }}
                        source={weatherImage[parseInt((weather.minutely[0].sky.code).substring(6, 7)) - 1]} />
                </View>
                <View
                    justifyContent='flex-start'
                    flexDirection='column'>
                    <View
                        justifyContent='flex-start'
                        alignItems='center'
                        flexDirection='row'
                        style={{ marginBottom: 5 }}>
                        <Image
                            style={{ width: 45, height: 45, marginRight: 10 }}
                            source={require('../../assets/images/weather_icon/바람.png')} />
                        <Text>{weather.minutely[0].wind.wspd + " m/s"}</Text>
                    </View>
                    <View
                        justifyContent='flex-start'
                        alignItems='center'
                        flexDirection='row'>
                        <Image
                            style={{ width: 45, height: 45, marginRight: 10 }}
                            source={require('../../assets/images/weather_icon/습도.png')} />
                        <Text>{weather.minutely[0].humidity + " %"}</Text>
                    </View>
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <Text> {
                    Moment(cur_date).add(next_hour + value - 3, 'hours').format('YYYY/MM/DD  HH:mm') + "  "
                    + dayofweek[(Moment(cur_date).add(next_hour + value - 3, 'hours').day()) % 7] + ",  " +
                    weather.forecast3days[0].fcst3hour.sky[`name${value + 1}hour`]}</Text>
                <View
                    justifyContent='space-around'
                    alignItems='center'
                    flexDirection='row'>
                    <View
                        flexDirection='row'
                        alignItems='flex-start'>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 80,
                        }}>
                            {parseInt(weather.forecast3days[0].fcst3hour.temperature[`temp${value + 1}hour`])}</Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 45,
                            marginTop: 10
                        }}>
                            ℃</Text>
                    </View>
                    <Image
                        style={{ width: 140, height: 140 }}
                        source={weatherImage[parseInt((weather.forecast3days[0].fcst3hour.sky[`code${value + 1}hour`]).substring(6, 7)) - 1]} />
                </View>
                <View
                    justifyContent='flex-start'
                    flexDirection='column'
                    style={{ marginBottom: 20 }}>
                    <View
                        justifyContent='flex-start'
                        alignItems='center'
                        flexDirection='row'
                        style={{ marginBottom: 5 }}>
                        <Image
                            style={{ width: 45, height: 45, marginRight: 10 }}
                            source={require('../../assets/images/weather_icon/바람.png')} />
                        <Text>{weather.forecast3days[0].fcst3hour.wind[`wspd${value + 1}hour`] + " m/s"}</Text>
                    </View>
                    <View
                        justifyContent='flex-start'
                        alignItems='center'
                        flexDirection='row'>
                        <Image
                            style={{ width: 45, height: 45, marginRight: 10 }}
                            source={require('../../assets/images/weather_icon/습도.png')} />
                        <Text>{weather.forecast3days[0].fcst3hour.humidity[`rh${value + 1}hour`] + " %"}</Text>
                    </View>
                </View>
            </View>
        );
    }

}

export { current_weather, n_days_weather, weatherImage, dayofweek, getWeatherView, long_weather, getLongWeatherView }