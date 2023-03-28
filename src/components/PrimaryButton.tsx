import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PrimaryButton = ({ children }: Props) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
