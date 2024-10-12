import { Text, View } from "react-native";
import WeightCalculator from "../components/WeightCalculator";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WeightCalculator></WeightCalculator>
    </View>
  );
}
