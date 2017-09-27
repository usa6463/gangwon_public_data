import React, { Component } from 'react';
import { Text, View, FlatList, List, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class Sight extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: '주변 관광지',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props){
        super(props);
        this.prop = this.props.navigation.state.params
        this.state = {
            sights : [
            ],
            visible : true,
        };
        this.get_distance = this.get_distance.bind(this);
        this.kind = [
            'port',
            'campground',
            'astronomical_observatory',
            'observatory',
            'amusement_park',
            'island',
            'valley',
            'etc',
            'waterfall',
            'theme_park',
            'experience_village',
            'natural_recreation_forest',
            'natural_ecology',
            'ruins',
            'cruise',
            'mountain',
            'museum',
            'leisure_sports',
            'road',
            'flower_garden',
            'lake',
            'beach',
            'park',
            'culture',
            'river',
        ]
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
                <FlatList
                    data={this.state.sights}
                    keyExtractor={item => ''+item.LAT}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('SightInfo', item)} } >
                            <View style={styles.list_item}>
                                <Image
                                    style={styles.avatar}
                                    source={{uri : item.img_link}}
                                />
                                <View style={styles.title_container}>
                                    <Text style={styles.title_text}> {item.SUBJECT} </Text>
                                    <Text style={styles.sub_title_text}> {item.SMGW_ADDRESS_S} </Text>
                                    <Text style={styles.sub_title_text}> {item.SMGW_SUMMARY_S} </Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }

    get_distance(lat1,lng1,lat2,lng2) {
        function deg2rad(deg) {
            return deg * (Math.PI/180)
        }
    
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lng2-lng1);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return d;
    }

    componentWillMount(){
        this.kind.map(stay_kind => {
            let myApiUrl = `http://data.gwd.go.kr/apiservice/734a677953757361387467517772/json/tourdb-tourist_attraction-${stay_kind}-kr/1/1000/`;
            fetch(`${myApiUrl}`, {
                method: 'GET',
            }).then(response =>{
                let obj = JSON.parse(response._bodyInit);
                let row = obj[Object.keys(obj)[0]].row;
    
                row.map(dict => {
                    dist = this.get_distance(dict.LAT, dict.LNG, this.prop.total.LAT, this.prop.total.LNG);
                    if(dist<10.0 && dist!=0){
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
                            
                            var sights = this.state.sights.slice()
                            sights.push(dict)
                            this.setState({ sights: sights })
                        })
                    }
                    
                })
            });
        })
        this.setState({
            visible: !this.state.visible
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
