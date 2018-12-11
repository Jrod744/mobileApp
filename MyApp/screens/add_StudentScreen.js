import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Switch } from 'react-native';

export default class MainScreen extends React.Component {
    state= {
        name: 'Name',
        show: false,
        id: 0,
    }

    pushStudent = () => {
        //figure out what your doing with id
        // add new student the the array
        newStudent= {
            name: this.state.name,
            show: this.state.show,
            id: this.state.id
        }

        console.log('Name: ' + newStudent.name)
        console.log('Show: ' + newStudent.show)
        console.log('ID: ' + newStudent.id)

        this.props.navigation.goBack()
    }

    render(){
        return(
            <View flex={1} alignItems={'center'} justifyContent= {'center'}>
                <Text>AddStudentScreen </Text>
                <TextInput
                    style={styles.textInputs}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <Text>Did the student show up to class?</Text>
                <Switch
                    value = {this.state.show}
                    onValueChange = {(show) => this.setState({show})}
                />
                <Button
                    title = 'Add Student'
                    onPress = {this.pushStudent}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInputs:{
        height: 30,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    }
})