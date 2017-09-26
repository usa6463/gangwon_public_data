import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

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
        };
    }
    
    render() {
        return (
            // <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title_text}>{this.prop.total.SUBJECT}</Text>
                </View>
                <ScrollView style={styles.scroll}>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>
                    <Text style={{alignItems: 'center'}}> {this.prop.total.SUBJECT} </Text>

                </ScrollView>
            </View>
            
        );
    }

    componentDidMount(){
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
        // marginTop: 10,
        // width: 280,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 16,
    },
    scroll: {
        flex: 0.6,
    }
})