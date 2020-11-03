import React from "react";
import { Card, Text, CardItem } from "native-base";
import { ShadowPropTypesIOS, StyleSheet } from "react-native";

export default function OptionCard({
  optionText,
  onSelectOption,
  propsStyle,
  ...props
}) {
  return (
    <Card style={styles.containerStyle}>
      <CardItem
        style={{ ...styles.cardItem, ...propsStyle }}
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
    justifyContent: "center",
    alignSelf: "stretch",
    borderRadius: 10,
  },
  optionText: {
    fontWeight: "700",
    padding: 10,
  },
});
