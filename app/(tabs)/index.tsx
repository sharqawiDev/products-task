import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Logo from "@/components/logo";
import { ThemedButton } from "@/components/ThemedButton";
import { router } from "expo-router";

export default function HomeScreen() {
  const { push } = router;
  return (
    <ThemedView style={styles.container}>
      <Logo style={styles.logo} />
      <ThemedButton
        title="START"
        style={styles.btn}
        onPress={() => push("/(tabs)/products")}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  btn: { width: "100%" },
  logo: {
    marginBottom: 50,
  },
});
