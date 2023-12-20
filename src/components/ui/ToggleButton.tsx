import {StyleSheet, View} from "react-native";
import React, {useState} from "react";
import CustomButton from "./CustomButton";
import {COLORS, SCALE, SIZES} from "../../constants";

const {s, ms, mvs} = SCALE;

const ToggleButtom = () => {
  const [type, setType] = useState<"expense" | "income">("income");
  return (
    <View style={styles.container}>
      {(["expense", "income"] as ["expense", "income"]).map(item => (
        <CustomButton
          key={item}
          label={item}
          style={[
            styles.btn,
            {
              backgroundColor: type === item ? COLORS.primary : COLORS.darkGrey,
            },
          ]}
          onPress={() => setType(item)}
        />
      ))}
    </View>
  );
};

export default ToggleButtom;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: mvs(SIZES.margin),
  },
  btn: {
    width: "50%",
    borderRadius: 0,
  },
});
