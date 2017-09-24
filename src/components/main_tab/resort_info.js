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
            content : '',
            region: {
                latitude: 37.1577340922822,
                longitude: 128.949015226374,
                latitudeDelta: 1.2,
                longitudeDelta: 1.2,
            },
            visible : true,
        };
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
                    <MapView.Marker
                        coordinate={{
                            latitude: 37.1577340922822,
                            longitude: 128.949015226374,
                        }}
                        title="O2&리조트"
                        description="강원도 태백시 서학로 861 (황지동)"
                    >
                    </MapView.Marker>
                </MapView>
            </View>
        );
    }

    componentDidMount(){
        let myApiUrl = "http://data.gwd.go.kr/apiservice/734a677953757361387467517772/json/tourdb-tourist_attraction-leisure_sports-kr/1/200";
        fetch(`${myApiUrl}`, {  
        method: 'GET',
        }).then(response =>{
            this.state.content = response;
            console.log(this.state.content);
            
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
