import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import classList from '../data/ClassList'

export default class MainScreen extends React.Component {
    state={
       classList: [...classList],
    }

    static navigationOptions = {
        header: null
    }

    showAttendance = () => {
        this.props.navigation.navigate('Attendance')
    }

    showSettings = () => {
        this.props.navigation.navigate('Settings')
    }

    render(){
        

        return(
            <View flex={1} alignItems={'center'} justifyContent= {'center'}>
                <Text>MainScreen </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.showAttendance}>
                    <Text> Moblie Apps Class </Text>
                </TouchableOpacity>
                <Button
                    title={'Settings'} 
                    onPress={this.showSettings}
                />
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