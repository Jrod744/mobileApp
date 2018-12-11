import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class MainScreen extends React.Component {

    render(){
        return(
            <View flex={1} alignItems={'center'} justifyContent= {'center'}>
                <Text>AddClassScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    }
})