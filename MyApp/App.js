// In App.js in a new project

import React from "react";
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, SafeAreaView, createAppContainer} from "react-navigation";

import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'
import SettingScreen from './screens/SettingScreen'
import AttendanceScreen from './screens/AttendanceScreen'
import add_ClassScreen from './screens/add_ClassScreen'
import edit_ClassScreen from './screens/edit_ClassScreen'
import add_StudentScreen from './screens/add_StudentScreen'

//import classList from './data/ClassList'

const SettingNav = createBottomTabNavigator(
    {
        'Add Class': add_ClassScreen,
        'Settings': SettingScreen,
        'Edit Class': edit_ClassScreen,
    },
    {
        initialRouteName: 'Settings',
    }
)

const MainNav = createStackNavigator(
    {
        'Main': MainScreen,
        'Attendance':AttendanceScreen,
        'Settings': SettingNav,
        'addStudent': add_StudentScreen,
    },
    {
      initialRouteName: 'Main',
 
    })

const AppNav = createSwitchNavigator(
    {
        'Login': LoginScreen,
        'Main': MainNav,

    },
    {
        initialRouteName: 'Login',
    },
)  

const AppContainer = createAppContainer(AppNav);

export default class App extends React.Component {
    state={
        //classList: classList
    }

    render() {
      return (
            <SafeAreaView style={styles.container} forceInset={{top:'always', horizontal:'never'}}>
                <AppContainer/> 
            </SafeAreaView>        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})