import React, { Component } from 'react'
import { TabNavigator,} from "react-navigation";

import ResortDetail from './resort_detail';
import Restaurant from './restaurant';

export default TabNavi = TabNavigator(
    {
        resort_detail: { screen: ResortDetail },
        restaurant: { screen: Restaurant },
        // stay: { screen: Stay },
        // sights: { screen: Sights },
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