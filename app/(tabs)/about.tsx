import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Logo from "@/components/logo";

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <Logo style={styles.logo} />
      <ThemedText type="subtitle" style={styles.subtitle}>
        About NHC National Housing Company
      </ThemedText>
      <ThemedText style={styles.text}>
        NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437 AH
        to be the investment arm of the initiatives and programs of the Ministry
        of Municipal and Rural Affairs and Housing in the real estate,
        residential and commercial sectors. Then the Company came under state
        ownership.
      </ThemedText>
      <ThemedText type="subtitle" style={styles.subtitle}>
        National Housing Strategy
      </ThemedText>
      <ThemedText style={styles.text}>
        The NHC Strategy aims for the Company to be an enabler of the real
        estate supply system by empowering the private sector to develop the
        real estate market and improve the professionalism of the services
        provided in it.
      </ThemedText>
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
  subtitle: {
    width: "100%",
    textAlign: "left",
    color: "#285F9D",
    fontFamily: "Abel",
    fontWeight: 400,
    lineHeight: 31,
  },
  text: { textAlign: "left", lineHeight: 31, fontFamily: "Abel" },
  logo: {
    marginBottom: 50,
  },
});
