import React, { Component } from "react";
import { StyleSheet, View, Button, Platform, StatusBar, Image, Dimensions, SafeAreaView, TouchableOpacity, Text } from "react-native";
import {RFValue} from 'react-native-responsive-fontsize'
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class Logout extends Component{
  componentDidMount(){
    firebase.auth().signOut()
  }

  render(){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LogOut</Text>
      </View>
    )
  }

}