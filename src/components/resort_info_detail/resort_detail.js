import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Dimensions, Modal, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MapCallout from 'react-native-maps';
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

            region: {
                latitude: 37.474397,
                longitude: 128.217005,
                latitudeDelta: 2.0,
                longitudeDelta: 2.0,
            },

            modalVisible : false,
        };

        this.setModalVisible = this.setModalVisible.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);

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

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    onRegionChange(region) {
        this.setState({ region });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
                <ScrollView style={styles.scroll}>
                    <Card>
                        <CardImage source={{uri: this.prop.img_link}} />
                        <CardTitle title= "소개" />
                        <CardContent text={this.prop.CONTENT}/>
                    </Card>

                    <Card>
                        
                        <CardTitle title= "날씨" />
                        <CardContent text={this.prop.CONTENT}/>
                    </Card>

                    <Card>
                        <Text style={styles.card_text}>이용 요금</Text>
                        <ScrollView horizontal={true}>
                            <Image
                                resizeMode="contain"
                                style={styles.card_image}
                                source={this.fee[this.prop.CONTENT_ID]}
                            />
                        </ScrollView>
                    </Card>

                    <Card>
                        <Text style={styles.card_text}>슬로프</Text>
                        <ScrollView horizontal={true}>
                            <Image
                                resizeMode="contain"
                                style={styles.card_image}
                                source={this.slope[this.prop.CONTENT_ID]}
                            />
                        </ScrollView>
                    </Card>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
                    >     
                        <MapView
                            style={styles.map}
                            region={this.state.region}
                            onRegionChange={this.onRegionChange}
                        >
                            <MapView.Marker 
                                key = {this.prop.CONTENT_ID}
                                coordinate={{
                                    latitude: this.prop.LAT,
                                    longitude: this.prop.LNG,
                                }}
                            >
                                <MapView.Callout>
                                    <View style={styles.callout_container}>
                                        <Text style={styles.callout_title}>{this.prop.SUBJECT}</Text>
                                        <Text Style={styles.callout_description}>{this.prop.SMGW_ADDRESS_S}</Text>
                                    </View>
                                </MapView.Callout>

                            </MapView.Marker>  
                        </MapView>
                    </Modal>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {this.setModalVisible(true)}}>
                            <Text style={styles.buttonText}>지도 보기</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
            
        );
    }

    componentDidMount(){
        this.setState({
            visible: !this.state.visible
        });
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
    },
    map: {
        width: width,
        height: height,
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
    },
    buttonContainer: {
        flex: 1,
        marginTop:10,
    },
    button: {
        backgroundColor: '#FFF',
        paddingVertical: 15,
    },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 18
    },
})