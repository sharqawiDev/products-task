import React from "react";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  TouchableOpacity,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "search";
  clear?: () => void;
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  type = "default",
  clear,
  value,
  ...rest
}: ThemedInputProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor || "#f1f1f1", dark: darkColor || "#1E1E1E" },
    "background"
  );
  const color = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  const placeholderColor = useThemeColor({}, "searchPlaceholder");
  const iconColor = useThemeColor({ light: "#000", dark: "#fff" }, "icon");

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      {type === "search" && (
        <Ionicons name="search" size={24} color={iconColor} />
      )}
      <TextInput
        style={[
          styles.input,
          { color },
          type === "search" ? styles.search : undefined,
        ]}
        value={value}
        returnKeyType="done"
        placeholderTextColor={placeholderColor}
        {...rest}
      />
      {(value?.length ?? 0) > 0 && (
        <TouchableOpacity onPress={clear}>
          <Ionicons name="close" size={24} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    height: 40,
    flex: 1,
  },
  search: {
    paddingLeft: 10,
  },
});
