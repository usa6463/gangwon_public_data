import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image, List } from 'react-native';
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
            resorts : [
            ],
            visible : true,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.visible} textContent={"Loading"} textStyle={{color: '#FFF'}} cancelable={true} animation={'fade'}/>
                <FlatList
                    data={this.state.resorts}
                    keyExtractor={item => ''+item.LAT}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('ResortInfoDetail', item)} } >
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

    componentDidMount(){
        let row = require( "./ski_resort_info.json" )
        console.log(row)
        row.map(dict => {
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
                
                var resorts = this.state.resorts.slice()
                resorts.push(dict)
                this.setState({ resorts: resorts })
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
