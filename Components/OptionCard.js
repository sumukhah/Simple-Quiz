import React from "react";
import { Card, Text, CardItem } from "native-base";
import { StyleSheet } from "react-native";

export default function OptionCard({ optionText, onSelectOption, ...props }) {
  return (
    <Card style={styles.containerStyle}>
      <CardItem
        style={styles.cardItem}
        header
        button
        onPress={() => {
          onSelectOption(optionText);
        }}
        {...props}
      >
        <Text style={styles.optionText}>{optionText}</Text>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 10,
    alignItems: "center",
  },
  cardItem: {
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: 10,
  },
  optionText: {
    fontWeight: "700",
  },
});
