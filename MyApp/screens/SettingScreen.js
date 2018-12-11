import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Icon, Header, Container, Content, Left} from 'native-base'

export default class SettingScreen extends React.Component {
    render(){
        return(
            <View flex={1} alignItems={'center'} justifyContent= {'center'}>
                <Text>SettingsScreen {this.props.navigation.getProps}</Text>
            </View>  
        )
    }
}