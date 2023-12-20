import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Button,
} from "react-native";
import React from "react";
import {COLORS, FONTS, SCALE, SIZES} from "../../constants";

const {mvs} = SCALE;

type Props = TouchableOpacityProps & {
  label: string;
};

const CustomButton = ({label, style, onPress}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.white,
    paddingVertical: mvs(SIZES.base),
  },
});
