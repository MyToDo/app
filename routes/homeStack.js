import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import TodoDetails from "../screens/todoDetails";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="MyTo.Do" />,
        headerTitleContainerStyle: {
          left: 0,
          right: 0
        }
      };
    }
  },
  TodoDetails: {
    screen: TodoDetails,
    navigationOptions: {
      title: "To Do Details"
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#4285F4",
      height: 150
    }
  }
});

export default HomeStack;
