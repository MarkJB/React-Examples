import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Header = () => {
  return (
    <View style={styles.title}>
      <Text variant="headlineSmall">ToDo Demo App</Text>
      <Text variant="bodyMedium">
        Built using Andoird Emulator, React Native, React Native Paper and
        Typescript
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
});
