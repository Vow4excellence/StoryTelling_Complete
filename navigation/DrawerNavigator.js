import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout"
import firebase from 'firebase';
import CustomSidebarMenu from '../screens/CustomSidebarMenu'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{

    constructor(props){
      super(props);
      this.state ={
        lightTheme: true
      }
    }

    componentDidMount(){
      let theme;
      firebase.database().ref("/users/" + firebase.auth().currentUser.uid).on("value", function(snapshot){
        theme = snapshot.val().current_theme
      })
      this.setState({
        lightTheme: theme === "light" ? true : false
      })
    }

    render(){

  return (
    <Drawer.Navigator
      drawerContentOption = {{
        activeTintColor: "blue",
        inactiveTintColor: this.state.lightTheme ? "black" : "white",
        itemStyle: {marginVertical: 5}
      }}
      drawerContent = {(props) => <CustomSidebarMenu {...props}/>}
      >
      <Drawer.Screen name="Home" component={StackNavigator} options = {{unmountOnBlur: true}} />
      <Drawer.Screen name="Profile" component={Profile}  options = {{unmountOnBlur: true}} />
      <Drawer.Screen name = "Logout" component={Logout} options = {{unmountOnBlur: true}}/>
    </Drawer.Navigator>
  );
};
}


