import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, Button, Alert, ViewPagerAndroid } from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'


export default class Recommand extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'Recommand',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
            headerRight: (
                <TouchableOpacity onPress={() => {navigation.navigate('Settings')} } >
                    <Image
                        style={navi_styles.settingIcon}
                        source={require('../../assets/images/set.png')}
                    />
                </TouchableOpacity>
            )
        }
    }

    constructor(props){
        super(props);
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} />;
    }
    
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{flex:1}}
                    indicator={this._renderDotIndicator()}
                    horizontalScroll={true}
                    removeClippedSubviews={false}
                >
                    <View style={{flex:1, alignItems:'center', padding:20}}>
                        <Text style={{color:'black', fontSize:18}}>page two</Text>
                    </View>
                    <View>
                        <Button
                            onPress={() => Alert.alert('need logout funtion')}
                            title="Learn More"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    <View>
                        <Text>page three</Text>
                    </View>
                    <View>
                        <Text>page four</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}