import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
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
            markers : [
            ],
                
            region: {
                latitude: 37.1577340922822,
                longitude: 128.949015226374,
                latitudeDelta: 1.2,
                longitudeDelta: 1.2,
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
                            key = {marker.name}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
            </View>
        );
    }

    componentDidMount(){
        let myApiUrl = "http://data.gwd.go.kr/apiservice/734a677953757361387467517772/json/tourdb-tourist_attraction-leisure_sports-kr/1/2";
        fetch(`${myApiUrl}`, {  
        method: 'GET',
        }).then(response =>{
            let obj = JSON.parse(response._bodyInit);
            let row = obj[Object.keys(obj)[0]].row;
            row.map(dict => {
                console.log(dict.LNG);
                temp = {
                    name : dict.CONTENT_ID,
                    latlng :{
                        latitude: Number(dict.LAT),
                        longitude: Number(dict.LNG)
                    },
                    title : dict.SUBJECT,
                    description : dict.SMGW_ADDRESS_S,
                }
    
                this.state.markers.push(temp);
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
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        width: width,
        height: height
    },
});
