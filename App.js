import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import IntroScreen from "./Containers/IntroScreen";
import QuizScreen from "./Containers/QuizScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    isReady: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="intro"
            component={IntroScreen}
            options={{ title: "Introduction" }}
          />
          <Stack.Screen
            name="quiz"
            component={QuizScreen}
            options={{
              title: "Quiz",
              headerLeft: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
