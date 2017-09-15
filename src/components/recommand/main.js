import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, Button, Alert, ViewPagerAndroid } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style'

import Days from './days';
import Sights from './sights';
import Skill from './skill';
import Stay from './stay';

export default class Recommand extends React.Component {
    static navigationOptions =  ({ navigation }) => {
        return{
            headerTitle: 'Recommand',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
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
                    horizontalScroll={false}
                >
                    <View>
                        <Days/>
                    </View>
                    <View>
                        <Stay/>
                    </View>
                    <View>
                        <Sights/>
                    </View>
                    <View>
                        <Skill/>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}