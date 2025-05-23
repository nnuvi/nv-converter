import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface HeaderProps {
  title?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const Header: React.FC<HeaderProps> = ({ title= "NV Converter"}) => {
  const { theme } = useThemeColors();
  return (
    <View style={[styles.container, {backgroundColor: theme.primaryColor}]}>
      <Text style={[styles.title, {color: theme.text}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Queensides",
    padding: 16,
    paddingTop: 36
  },
});

export default Header;
