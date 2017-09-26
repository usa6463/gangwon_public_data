import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import content_styles from '../../assets/styles/content_style'
import navi_styles from '../../assets/styles/navi_style'
import Button from 'apsl-react-native-button'


export default class SkiInfo extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Ski Detail',
            headerStyle: navi_styles.headerStyle,
            headerTitleStyle: navi_styles.headerTitleStyle,
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.col_container} >
                <View style={styles.row_container}>
                    <Button style={styles.round_button}>
                        <Text style={styles.button_text_style}>스키장 소개</Text>
                    </Button>
                    <Button style={styles.round_button}>
                        <Text style={styles.button_text_style}>이용 요금{"\n"}및 시간</Text>
                    </Button>
                </View>
                <View style={styles.row_container}>
                    <Button style={styles.round_button}>
                        <Text style={styles.button_text_style}>슬로프</Text>
                    </Button>
                    <Button style={styles.round_button}>
                        <Text style={styles.button_text_style}>숙박</Text>
                    </Button>
                </View>
                <View style={styles.row_container}>
                    <Button style={styles.round_button}>
                        <Text style={styles.button_text_style}>식사</Text>
                    </Button>
                    <Button style={styles.round_button}>
                        <Text style={styles.button_text_style}>주변 관광지</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    row_container: {
        width: width,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    col_container: {
        height: height - 100,
        width: width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    round_button: {
        width: 140,
        height: 140,
        borderRadius: 20,
        backgroundColor: '#5CD1E5',
        borderWidth: 0,
        margin: 5
    },
    button_text_style: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
});
