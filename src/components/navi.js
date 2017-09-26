import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";

import Home from './main_tab/home';
import ResortDashboard from './main_tab/resort_dashboard';
import ResortInfo from './main_tab/resort_info';

import SettingList from './settings/main';
import SkiInfo from './skiinfodetail/ski_info_main';
import RecommandMain from './recommand/main';


const TabNavi = TabNavigator(
    {
        home: { screen: Home },
        dashboard: { screen: ResortDashboard },
        info: { screen: ResortInfo },
    },
    {
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
    SkiInfo: { screen: SkiInfo}
});