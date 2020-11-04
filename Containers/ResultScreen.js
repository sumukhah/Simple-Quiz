import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo as Icon, AntDesign } from "@expo/vector-icons";
import { H1, H3, Button } from "native-base";
import LottieView from "lottie-react-native";

export default class ResultScreen extends React.Component {
  componentDidMount() {
    if (this.props.route.params.coins > 0) this.animation.play(30, 120);
  }
  render() {
    const { coins } = this.props.route.params;
    return (
      <View style={styles.container}>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          source={require("../assets/animation/prize.json")}
          style={coins > 0 ? {} : { width: 0, height: 0 }}
        />

        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              // alignItems: "center",
            }}
          >
            <H1 style={styles.titleText}>
              That was {coins > 0 ? "amazing" : "Ok"}
            </H1>
          </View>
          <H3 style={styles.descriptionText}>You have earned {coins} coins</H3>
        </View>
        <Button
          iconLeft
          style={styles.replayButton}
          primary
          large
          onPress={() => this.props.navigation.push("quiz")}
        >
          <AntDesign name="reload1" size={24} color="white" />
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginBottom: 20,
  },
  replayButton: {
    paddingHorizontal: 40,
    alignSelf: "center",
    borderRadius: 10,
  },
});
