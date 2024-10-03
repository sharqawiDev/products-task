import LottieView, { LottieViewProps } from "lottie-react-native";

export const Loader = (props?: Partial<LottieViewProps>) => {
  return (
    <LottieView
      {...props}
      autoPlay
      loop
      style={{
        width: 100,
        height: 100,
        alignSelf: "center",
        backgroundColor: "transparent",
      }}
      source={require("@/assets/images/lottie-loader.json")}
    />
  );
};
