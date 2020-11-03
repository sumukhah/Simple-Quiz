import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Card, CardItem, Text, Body, H2 } from "native-base";
import OptionCard from "../Components/OptionCard";

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
      this.setState({ status: "Wrong" });
    }
    if (this.state.questionNum % 5 === 0) {
      // For terminating from game, Keep it less to check faster
      if (this.state.level === 1) {
        this.props.navigation.navigate("intro", { coins: this.state.score });
        return;
      }
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
    const { numA, numB, ans, options, status } = this.state;
    if (numA === 0 && numB === 0) {
      return <Text>Loading questions</Text>;
    }
    return (
      <View style={styles.containerStyle}>
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignSelf: "stretch",
            justifyContent: "space-evenly",
          }}
        >
          <Text>Level: {this.state.level}</Text>
          <Text>Question number: {this.state.questionNum}</Text>
          <Text>Score: {this.state.score}</Text>
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
            <Text>{status}</Text>
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
      </View>
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
    paddingVertical: 20,
    alignItems: "center",
  },
  questionFontStyle: {
    fontFamily: "serif",
    fontWeight: "500",
  },
  bodyStyle: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
});
