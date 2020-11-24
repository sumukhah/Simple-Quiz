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
            // rounded
          >
            <Icon name="caretright" color="white" size={26} />
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
  buttonStyle: {
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#1111",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
