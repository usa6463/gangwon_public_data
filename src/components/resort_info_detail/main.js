import React, { Component } from 'react'
import { TabNavigator,} from "react-navigation";

import ResortDetail from './resort_detail';
import Restaurant from './restaurant';
import Stay from './stay';
import Sight from './sight';

export default TabNavi = TabNavigator(
    {
        정보: { screen: ResortDetail },
        식당: { screen: Restaurant },
        숙박지: { screen: Stay },
        관광지: { screen: Sight },
    },
    {   
        lazy: true,
        swipeEnabled: true,
        tabBarPosition: 'top',
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
