import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, H1, H3 } from "native-base";

export default class IntroScreen extends Component {
  handleStartQuiz = () => {
    this.props.navigation.navigate("quiz");
  };
  render() {
    const { params } = this.props.route;

    return (
      <View style={styles.introContainer}>
        <View>
          <H1 style={styles.titleText}> Hello User </H1>
          <H3 style={styles.descriptionText}>
            {!!params
              ? `You have earned ${params.coins} coins`
              : "You are back"}
          </H3>
        </View>
        <View>
          <Button onPress={this.handleStartQuiz}>
            <Text>Start Quiz</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  descriptionText: {
    color: "grey",
    margin: 7,
  },
  titleText: {
    fontWeight: "700",
  },
});
