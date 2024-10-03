import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { useNavigation, useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { useProductStore } from "@/store/ProductStore";
import { Product } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import { Loader } from "@/components/Loader";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView } from "react-native";

const ProductData = () => {
  const navigation = useNavigation();
  const { products } = useProductStore();
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(products?.find((product) => `${product.id}` === id));
    if (product?.title) navigation.setOptions({ title: product?.title });
  }, [product, products, id, navigation]);
  if (!product) return <Loader />;
  return <ProductDetailsScreen product={product!} />;
};

const ProductDetailsScreen = ({ product }: { product: Product }) => {
  return (
    <ScrollView>
      <ThemedView style={styles.container} normalView>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.thumbnail}
          contentFit="contain"
        />
        <View style={styles.row}>
          <View style={styles.rowCol}>
            <ThemedText type="defaultSemiBold">Stock: </ThemedText>
            <ThemedText type="link">{product.stock}</ThemedText>
          </View>
          <View style={[styles.rowCol, { marginLeft: "auto" }]}>
            <ThemedText type="defaultSemiBold">Price: </ThemedText>
            <ThemedText type="link">{product.price}$</ThemedText>
          </View>
        </View>

        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Rating: </ThemedText>
          <Stars rating={product.rating} />
        </View>

        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Brand: </ThemedText>
          <ThemedText type="link">{product.brand}</ThemedText>
        </View>

        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Discount Percentage: </ThemedText>
          <ThemedText type="link">{product.discountPercentage}%</ThemedText>
        </View>

        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Category: </ThemedText>
          <ThemedText type="link">{product.category}</ThemedText>
        </View>

        <ThemedText style={styles.sectionTitle}>Product Description</ThemedText>
        <ThemedText>{product.description}</ThemedText>

        <ThemedText style={styles.sectionTitle}>Product Images</ThemedText>
        <FlatList
          data={product.images}
          horizontal
          renderItem={({ item }) => <ImageWithLoader uri={item} />}
          keyExtractor={(_, index) => `image-${index}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imageList}
        />
      </ThemedView>
    </ScrollView>
  );
};

const Stars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <View style={styles.starContainer}>
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <Ionicons key={index} name="star" size={24} color="gold" />
        ))}
      {halfStars === 1 && <Ionicons name="star-half" size={24} color="gold" />}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <Ionicons key={index} name="star-outline" size={24} color="gold" />
        ))}
    </View>
  );
};

const ImageWithLoader = ({ uri }: { uri: string }) => {
  const [loader, showLoader] = useState(true);
  return (
    <View style={styles.imageContainer}>
      {loader && (
        <ActivityIndicator
          style={[styles.productImage, styles.loader]}
          color={"black"}
        />
      )}

      <Image
        source={{ uri }}
        style={[styles.productImage]}
        contentFit="contain"
        key={uri}
        onLoadEnd={() => showLoader(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imageContainer: {
    position: "relative",
  },
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  thumbnail: {
    width: "90%",
    height: 183,
    marginHorizontal: "auto",
    borderRadius: 10,
    marginBottom: 22,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rowCol: { flexDirection: "row", alignItems: "center" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#285F9D",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: "white",
  },
  starContainer: {
    flexDirection: "row",
  },
  imageList: {
    paddingVertical: 10,
  },
});

export default ProductData;
