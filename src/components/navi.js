import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";

import Home from './main_tab/home';
import ResortDashboard from './main_tab/resort_dashboard';
import ResortInfo from './main_tab/resort_info';

import SettingList from './settings/main';
import ResortInfoDetail from './resort_info_detail/main';
import RecommandMain from './recommand/main';
import RecommandResult from './recommand/result';
import RestaurantInfo from './resort_info_detail/restaurant_info';
import StayInfo from './resort_info_detail/stay_info';


const TabNavi = TabNavigator(
    {
        홈: { screen: Home },
        대시보드: { screen: ResortDashboard },
        스키장정보: { screen: ResortInfo },
    },
    {   
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3498db',
            inactiveTintColor: 'black',
            labelStyle: {
                fontSize: 15,
            },
            style: {
                backgroundColor: 'white',
            },
        }
    }
);


export default StackNavi = StackNavigator({
    Home: { screen: TabNavi },
    Settings: { screen: SettingList },
    Recommand: { screen: RecommandMain },
    ResortInfoDetail: { screen: ResortInfoDetail},
    RecommandResult: { screen: RecommandResult },
    RestaurantInfo: { screen: RestaurantInfo },
    StayInfo: { screen: StayInfo },
});