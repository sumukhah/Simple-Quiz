import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, Text, H1, H3 } from "native-base";
import { AntDesign as Icon } from "@expo/vector-icons";

export default class IntroScreen extends Component {
  handleStartQuiz = () => {
    this.props.navigation.navigate("quiz");
  };
  render() {
    return (
      <View style={styles.introContainer}>
        <View>
          <Text style={styles.titleText}> Hello User </Text>
          <H3 style={styles.descriptionText}>It's time for Quiz</H3>
        </View>
        <View>
          <Button
            onPress={this.handleStartQuiz}
            style={styles.buttonStyle}
            primary
            large
          >
            <Icon name="caretright" color="white" size={26} />
            <Text style={{ marginVertical: 10, fontSize: 18 }}>Start Quiz</Text>
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
    marginLeft: 15,
  },
  titleText: {
    fontWeight: "700",
    alignItems: "center",
    marginBottom: 20,
    fontSize: 45,
  },
  buttonStyle: { paddingHorizontal: 20, borderRadius: 10 },
});
