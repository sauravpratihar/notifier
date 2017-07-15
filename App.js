import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
// var btoa = require('btoa');
export default class App extends React.Component {

    constructor(){
        super()
        this.state= {id: 'x' ,password:'y'}
    }

    onprogresshendler(){
        console.log(this.state.id);
        console.log(this.state.password);
        // console.log(refs.password);

        let url = 'https://'+ this.state.id + ':' + this.state.password + '@webmail.daiict.ac.in/home/~/inbox.json'

        console.log('https://webmail.daiict.ac.in/home/~/?id='+ this.state.id)
        return fetch(url, {
                headers: {
                    'Authorization': 'Basic '+btoa(this.state.id+':'+his.state.password)
                }
            })
                // .then((response) => response.json())

            .then((response) => {
                    console.log(response);
            })
            .catch((error) => {
                    console.error(error);
            });
            }


    render() {


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Webmail Login</Text>
        <Text style={styles.idpass}>ID:</Text>
        <TextInput
        style={{ fontSize: 20, height: 50, width:200, alignItems: 'center',justifyContent: 'center', marginTop:10 }}
        ref="id" value={this.state.id} onChangeText={(id) => this.setState({id})}
        />

        <Text style={styles.idpass}>Password:</Text>
        <TextInput
        style={{ fontSize: 20, height: 50, width:200, alignItems: 'center',justifyContent: 'center', marginTop:10 }}
        ref="password" secureTextEntry={true} value={this.state.password} onChangeText={(password) => this.setState({password})} />

          <Button onPress={this.onprogresshendler.bind(this)} title="Login" color="black" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // justifyContent: 'center',
  },
    title: {
        fontSize: 30,
        marginLeft: 70,
        marginTop: 50,
        justifyContent: 'center',

        alignItems: 'center',
    },

    idpass:{
        fontSize:20
    },
});
