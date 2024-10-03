import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type TouchableOpacityProps,
  type TextProps,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  textLightColor?: string;
  textDarkColor?: string;
  title: string;
  textStyle?: TextProps["style"];
};

export function ThemedButton({
  style,
  lightColor = "#285F9D",
  darkColor = "#1E3A5F",
  textLightColor = "#FFF",
  textDarkColor,
  title,
  textStyle,
  ...rest
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: textLightColor, dark: textDarkColor },
    "text"
  );

  return (
    <TouchableOpacity
      style={[{ backgroundColor }, styles.default, style]}
      {...rest}
    >
      <Text style={[{ color: textColor }, styles.defaultText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  defaultText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
