import { Colors } from "@/constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface OptionCardProps {
  label: string;
  onPress: () => void;
  selected?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const OptionCard: React.FC<OptionCardProps> = ({
  label,
  onPress,
  selected = false,
  style,
  textStyle,
}) => {
  const { theme } = useThemeColors();

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.image}>
        <Image
          source={require("./../../../assets/images/itp.png")}
          resizeMode="contain"
        />
        </View>
        <View
          style={[
            styles.labelContainer,
            { backgroundColor: theme.secondaryColor },
            selected && { backgroundColor: theme.green },
          ]}
        >
          <Text
            style={[
              styles.label,
              { color: theme.text },
              selected && styles.selectedText,
              textStyle,
            ]}
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 180,
    width: 145,
    borderRadius: 12,
    overflow: "hidden",
    margin: 8,
    elevation: 3, // optional: adds shadow on Android
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageCointainer: {},
  image: {
    width: "100%",
    height: "70%",
  },
  labelContainer: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  selectedText: {
    color: "#333",
  },
});
