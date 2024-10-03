import { KeyboardAvoidingView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedInput } from "@/components/ThemedInput";
import { useState } from "react";
import { useGetProducts } from "@/hooks/useProducts";
import { Loader } from "@/components/Loader";
import { NoSearchResults } from "@/components/NoSearchResults";
import { FlatList } from "react-native";
import ProductCard from "@/components/ProductCard";

export default function ProductsScreen() {
  const [searchText, setSearchText] = useState<string>();
  const { data, isLoading } = useGetProducts(searchText ?? "");
  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView style={styles.kView} behavior={"padding"}>
        <ThemedText lightColor={"#285F9D"} type="defaultSemiBold">
          Search products by keyword
        </ThemedText>
        <ThemedInput
          style={styles.searchInput}
          type="search"
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Enter search keyword"
          clear={() => setSearchText("")}
        />
        {isLoading ? (
          <Loader />
        ) : (data?.total ?? 0) > 0 ? (
          <FlatList
            contentContainerStyle={styles.productsList}
            data={data?.products}
            initialNumToRender={10}
            renderItem={({ item }) => (
              <ProductCard
                id={`${item.id}`}
                key={`product-${item.id}`}
                description={item.description}
                price={`${item.price}`}
                imageUrl={item.thumbnail}
                title={item.title}
              />
            )}
            keyExtractor={(product) => `${product.id}`}
          />
        ) : (
          <NoSearchResults />
        )}

        {!isNaN(data?.total as number) ? (
          <ThemedText style={styles.countLabel}>
            Total Results Count:{" "}
            <ThemedText lightColor={"#285F9D"} darkColor={"#82b0fa"}>
              {data?.total}
            </ThemedText>
          </ThemedText>
        ) : null}
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  kView: {
    height: "100%",
  },
  productsList: {
    marginTop: 32,
    paddingBottom: 20,
  },
  searchInput: {
    marginTop: 10,
  },
  countLabel: {
    paddingVertical: 12,
    marginHorizontal: "auto",
    marginTop: "auto",
  },
});
