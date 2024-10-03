import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaView } from "react-native-safe-area-context";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  normalView?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  normalView,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const V = normalView ? View : SafeAreaView;

  return (
    <V
      style={[{ backgroundColor, paddingHorizontal: 12 }, style]}
      edges={["top", "left", "right"]}
      {...otherProps}
    />
  );
}
