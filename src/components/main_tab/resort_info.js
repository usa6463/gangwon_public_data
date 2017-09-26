import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import MapCallout from 'react-native-maps';
import content_styles from '../../assets/styles/content_style';
import navi_styles from '../../assets/styles/navi_style';

export default class Recommand extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Ski Map Information',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.1577340922822,
                longitude: 128.949015226374,
                latitudeDelta: 1.2,
                longitudeDelta: 1.2,
            }
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                >
                
                    <MapView.Marker onCalloutPress={() => this.props.navigation.navigate('SkiInfo')}
                        coordinate={{
                            latitude: 37.1577340922822,
                            longitude: 128.949015226374,
                        }}
                        image={require('../../assets/images/ski_log_map.png')}
                        showCallout='true'
                    >
                        <MapView.Callout>
                            <View style={styles.callout_container}>
                                <Text style={styles.callout_title}>asdfasdfa</Text>
                                <Text Style={styles.callout_description}>asdfas</Text>
                            </View>
                        </MapView.Callout>
                    </MapView.Marker>
                    
                </MapView>
            </View>
        );
    }
}

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        width: width,
        height: height
    },

    callout_container: {
        flex: 1,
        backgroundColor: '#FFD8D8',
        borderRadius: 20
    },

    callout_title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
       // marginBottom: 4
    },
    callout_description: {
        fontSize: 12,
        fontStyle: 'normal',
        color: '#888',
        textAlign: 'center'
    }

});
