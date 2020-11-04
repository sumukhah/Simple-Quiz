import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Card, CardItem, Text, Body, H2 } from "native-base";
import OptionCard from "../Components/OptionCard";
import BackgroundImage from "../assets/cover.jpeg";
import { AntDesign as Icon } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

export default class QuizScreen extends Component {
  state = {
    score: 0,
    level: 1,
    questionNum: 1,
    numA: 0,
    numB: 0,
    ans: 0,
    options: [],
    status: "",
    life: 3,
  };

  generateNewQuestion = () => {
    const numA = Math.floor(Math.random() * 100);
    const numB = Math.floor(Math.random() * 100);
    const ans = numA + numB;
    const opt2 = Math.floor(Math.random() * 100);
    const opt3 = Math.floor(Math.random() * 100);
    const opt4 = Math.floor(Math.random() * 100);
    let options = [];
    options.push(ans, opt2, opt3, opt4);
    options.sort();
    const uniqueOptions = [...new Set(options)];
    this.setState({ numA, numB, ans, options: uniqueOptions, status: "" });
  };
  componentDidMount = () => {
    this.generateNewQuestion();
  };
  onSelectOption = (option) => {
    if (this.state.ans === option) {
      this.setState((state) => ({
        score: state.score + 10,
        status: "Correct",
      }));
    } else {
      this.setState((state) => ({ status: "Wrong", life: state.life - 1 }));
      if (this.state.life === 1) {
        this.props.navigation.navigate("result", { coins: this.state.score });
        return;
      }
    }
    if (this.state.questionNum % 5 === 0) {
      // For terminating from game, Keep it less to check faster
      this.setState((state) => ({
        level: state.level + 1,
      }));
    }
    this.setState((state) => ({
      questionNum: state.questionNum + 1,
    }));
    setTimeout(this.generateNewQuestion, 1000);
  };

  render() {
    const { numA, numB, ans, options, status, life } = this.state;
    if (numA === 0 && numB === 0) {
      return <Text>Loading questions</Text>;
    }
    return (
      <ImageBackground style={styles.containerStyle} source={BackgroundImage}>
        <View style={styles.scoreStyle}>
          <Text style={styles.scoreStyle}>Level: {this.state.level}</Text>
          <Text style={styles.scoreStyle}>{"❤️".repeat(life)}</Text>
          <Text style={styles.scoreStyle}>Score: {this.state.score}</Text>
        </View>

        <View style={styles.bodyStyle}>
          <Card style={styles.questionStyle}>
            <CardItem header>
              <H2 style={styles.questionFontStyle}>
                What is {numA} + {numB}
              </H2>
            </CardItem>
          </Card>
          <View>
            {options.map((opt) => (
              <OptionCard
                optionText={opt}
                key={opt}
                onSelectOption={this.onSelectOption}
                disabled={status !== ""}
                propsStyle={
                  status !== "" && opt === ans
                    ? { backgroundColor: "green" }
                    : {}
                }
              />
            ))}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    flex: 1,
  },
  questionStyle: {
    shadowColor: "#000",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingVertical: 50,
    alignItems: "center",
    borderRadius: 10,
  },
  questionFontStyle: {
    fontFamily: "serif",
    fontWeight: "500",
  },
  bodyStyle: {
    marginHorizontal: 10,
    borderRadius: 40,
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
  scoreStyle: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "white",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    paddingVertical: 5,
  },
});
