import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";

import Recommand from './content/recommand';
import ResortState from './content/resort_state';
import SettingList from './settings/setting_list';


const TabNavi = TabNavigator(
    {
        recommand: { screen: Recommand },
        ski: { screen: ResortState },
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
});