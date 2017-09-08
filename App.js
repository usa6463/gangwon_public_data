import React from 'react';
import {
  Text,
  AppRegistry,
} from 'react-native';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Text>Hello World</Text>
        )
    }
}

AppRegistry.registerComponent('gangwon_public_data', () => App);