import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import MapCallout from 'react-native-maps';
import Spinner from 'react-native-loading-spinner-overlay';
import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

export default class Recommand extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Ski Map Information',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            resort_name : ['오크밸리 스키장', '오투', '알펜시아', '웰리힐리', '휘닉스', '대명', '엘리시안', '용평', '하이원'],
            markers : [
            ],
                
            region: {
                latitude: 37.474397,
                longitude: 128.217005,
                latitudeDelta: 2.0,
                longitudeDelta: 2.0,
            },

            visible : true,
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                >
                    {this.state.markers.map(marker => (
                        <MapView.Marker 
                            onCalloutPress={() => this.props.navigation.navigate('ResortInfoDetail', marker)}
                            key = {marker.name}
                            image={require('../../assets/images/ski_log_map.png')}
                            coordinate={marker.latlng}
                        >
                            <MapView.Callout>
                              <View style={styles.callout_container}>
                                  <Text style={styles.callout_title}>{marker.title}</Text>
                                  <Text Style={styles.callout_description}>{marker.address}</Text>
                              </View>
                          </MapView.Callout>
                        </MapView.Marker>     
                    ))}
                </MapView>
            </View>
        );
    }

    componentDidMount(){
        let row = require( "./ski_resort_info.json" )
        console.log(row)
        row.map(dict => {
            this.state.resort_name.map(name => {
                if(dict.SUBJECT.search(name) >= 0 ){
                    temp = {
                        name : dict.CONTENT_ID,
                        latlng :{
                            latitude: Number(dict.LAT),
                            longitude: Number(dict.LNG)
                        },
                        title : dict.SUBJECT,
                        address : dict.SMGW_ADDRESS_S,
                        total : dict,
                    }
                    this.state.markers.push(temp);
                }
            })
        });
        this.setState({
            visible: !this.state.visible
        });
    }
}

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        width: width,
        height: height
    },

    callout_container: {
        flex: 1,
        backgroundColor: '#FFD8D8',
        borderRadius: 20
    },

    callout_title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
       // marginBottom: 4
    },
    callout_description: {
        fontSize: 12,
        fontStyle: 'normal',
        color: '#888',
        textAlign: 'center'
    }

});
