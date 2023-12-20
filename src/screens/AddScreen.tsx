import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {
  CustomButton,
  CustomDatePicker,
  RootScreen,
  TextField,
  ToggleButtom,
  Typography,
} from "../components";
import {SCALE, SIZES, FONTS} from "../constants";

const {ms, s, mvs} = SCALE;

const AddScreen = () => {
  return (
    <RootScreen style={styles.root}>
      <Typography style={styles.title}>Create transaction</Typography>

      <TextField label="amount" />

      <ToggleButtom />
      <TextField label="category" />
      <CustomDatePicker />

      <CustomButton label="Submit" style={styles.btn} />
    </RootScreen>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: ms(SIZES.padding),
    paddingTop: mvs(SIZES.padding),
  },
  title: {
    ...FONTS.h1,
    textAlign: "center",
    marginBottom: mvs(SIZES.margin),
  },
  btn: {
    marginTop: "auto",
    marginBottom: mvs(SIZES.margin * 6),
  },
});
