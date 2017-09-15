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
        this.state = {
            days: "1",
        };
        this.setDays = this.setDays.bind(this);
        this.movePage = this.movePage.bind(this);
    }

    setDays(days){
        this.setState({ days: days });
    };

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} />;
    }

    movePage(page_index){
        this.viewPager.setPage(page_index);
    }
    
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{flex:1}}
                    indicator={this._renderDotIndicator()}
                    horizontalScroll={false}
                    ref={(viewPager) => { this.viewPager = viewPager; }}
                >
                    <View>
                        <Days set_days={this.setDays} days={this.state.days} set_page={this.movePage} />
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