import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import React, { Component } from "react";
import { useThemeColor } from "@/contexts/ThemeContext";
import { useThemeColors } from "@/hooks/useThemeColors";
import OptionCard from "./options/OptionCard";
import { useRouter, router } from "expo-router";
import Header from "@/components/Header";

const Index = () => {
  const { theme } = useThemeColors();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <Header />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between", 
          padding: 16,
        }}
      >
        <OptionCard
          label="Image to Pdf"
          onPress={() => router.push("/(main)/options/ImgToPdf")}
        />
        <OptionCard
          label="Merge Pdf"
          onPress={() => router.push("/(main)/options/ImgToPdf")}
        />
        <OptionCard
          label="PPT to Pdf"
          onPress={() => router.push("/(main)/options/ImgToPdf")}
        />
        <OptionCard
          label="Merge PPT"
          onPress={() => router.push("/(main)/options/ImgToPdf")}
        />
      </View>
    </ScrollView>
  );
};

export default Index;
