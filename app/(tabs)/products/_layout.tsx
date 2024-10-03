import { Stack } from "expo-router";

const ProductsLayout = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Products",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerBackTitle: "Products",
        }}
      />
    </Stack>
  );
};

export default ProductsLayout;
