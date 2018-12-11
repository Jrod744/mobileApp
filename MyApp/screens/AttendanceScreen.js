
import React from 'react';
import { StyleSheet, Text, View, Button, SectionList, Switch, TouchableOpacity } from 'react-native';

import classList from '../data/ClassList'

export default class AttendanceScreen extends React.Component {
    state={
        section: [classList[0]],
      }

      static navigationOptions = ({navigation}) => ({
          headerRight: (
            <Button
                title='Add Student'
            onPress={() => {
                navigation.navigate('addStudent');
                }}
            />
            )
        })

    Remove = (index) =>{
        let list = this.state.section
        list[0].data.splice(index, 1)
        this.setState({
            section: list
        })
    }

    ToggleAttendance = (index) => {

           let list = this.state.section
           list[0].data[index].show = !(list[0].data[index].show)
           this.setState({
               section: list
           })
    }

    renderSectionHeader = ({section}) => {
        let NoShowCount = 0
        section.data.forEach(student => {
            if(student.show == false)
                NoShowCount = NoShowCount + 1
        });
        return(
            <Text>{section.key} Class Size: {section.data.length} No Show Count: {NoShowCount}</Text>
        )
    }

    renderItem = ({item, index}) => {
        return(
            <View flexDirection = {'row'} alignItems= {'center'} justifyContent ={'space-evenly'} width={300}>
                <Switch
                    value = {item.show}
                    onValueChange = {() => {this.ToggleAttendance(index)}}
                />
                <Text>{item.name}</Text>
                    <Button
                    title = 'Remove Student'
                    onPress = {() => {this.Remove(index)}}
                    />
            </View>
        )
    }

    render(){
        return(
            <View flex={1} alignItems={'center'} justifyContent= {'center'}>
                <Text>AttandanceScreen</Text>
                <SectionList 
                sections = {this.state.section} 
                renderItem = {this.renderItem}
                renderSectionHeader = {this.renderSectionHeader}
                keyExtractor={(item, index) => item + index}
                />
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 10
    }
})