import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class LoginScreen extends React.Component {
  state={
    txtBox_Username: "Username",
    txtBox_Password: "Password"
  }

  SignIn = () => {
    console.log("Signing in as Username: " + this.state.txtBox_Username 
                  + " Password: " + this.state.txtBox_Password)
    this.props.navigation.navigate({routeName:'Main'})
    }
  
  render() {
    

    return (
      <View style={styles.container}>
        <Text>Login as Instructor</Text>
        <TextInput
            style={styles.textInputs}
            onChangeText={(txtBox_Username) => this.setState({txtBox_Username})}
            value={this.state.txtBox_Username}
          />
          <TextInput
            style={styles.textInputs}
            marginBottom={12}
            onChangeText={(txtBox_Password) => this.setState({txtBox_Password})}
            value={this.state.txtBox_Password}
          />
          <Button 
            onPress={this.SignIn} 
            title={'Sign In'}
            style={styles.buttons}
          />       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputs:{
    height: 30,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  buttons:{
    height: 30,
  }
});
