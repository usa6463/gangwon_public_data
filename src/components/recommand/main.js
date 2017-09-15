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
            days: "1", // 1~5 / 1: 1day / 2: 2day ... / 5: 5day
            stay: "1", // 0,1 / 0: false / 1: true
            sights: "1", // 0,1 / 0: false / 1: true
            skill: "1" // 1~3 / 1: newbie / 2: intermidiate / 3: veteran
        };
        this.setDays = this.setDays.bind(this);
        this.setStay = this.setStay.bind(this);
        this.setSights = this.setSights.bind(this);
        this.setSkill = this.setSkill.bind(this);

        this.movePage = this.movePage.bind(this);
    }

    setDays(days){
        this.setState({ days: days });
    };

    setStay(bool){
        this.setState({ stay: bool });
    };

    setSights(bool){
        this.setState({ sights: bool });
    };

    setSkill(int){
        this.setState({ skill: int });
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
                        <Stay set_stay={this.setStay} stay={this.state.stay} set_page={this.movePage}/>
                    </View>
                    <View>
                        <Sights set_sights={this.setSights} sights={this.state.sights} set_page={this.movePage}/>
                    </View>
                    <View>
                        <Skill set_skill={this.setSkill} skill={this.state.skill} set_page={this.movePage}/>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}