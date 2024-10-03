import { StyleSheet } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export const NoSearchResults = () => {
  return (
    <ThemedView style={styles.container}>
      <Svg width="99" height="102" viewBox="0 0 99 102" fill="none">
        <Path
          opacity="0.5"
          d="M49.3731 100.493C76.5114 100.493 98.5114 78.4798 98.5114 51.3256C98.5114 24.1715 76.5114 2.15869 49.3731 2.15869C22.2347 2.15869 0.234741 24.1715 0.234741 51.3256C0.234741 78.4798 22.2347 100.493 49.3731 100.493Z"
          fill="#EDEFF0"
        />
        <Path
          d="M80.9118 25.3919L42.4624 23.7122C39.808 23.5962 37.5623 25.6552 37.4464 28.3112L34.9283 86.0187C34.8124 88.6746 36.8703 90.9217 39.5246 91.0377L77.974 92.7174C80.6284 92.8333 82.8742 90.7743 82.9901 88.1184L85.5082 30.4108C85.624 27.7549 83.5662 25.5078 80.9118 25.3919Z"
          fill="#EDEFF0"
          stroke="#909A9F"
          strokeWidth="2.80454"
        />
        <Path
          d="M53.3459 13.6369L15.1891 18.6633C11.8023 19.1094 9.41822 22.2182 9.8641 25.607L17.3992 82.8753C17.8451 86.2641 20.9521 88.6496 24.3389 88.2034L62.4957 83.177C65.8825 82.7309 68.2666 79.6221 67.8207 76.2333L60.2856 18.965C59.8397 15.5762 56.7327 13.1908 53.3459 13.6369Z"
          fill="white"
          stroke="#909A9F"
          strokeWidth="2.80454"
        />
        <Path
          d="M10.5455 25.5173C10.1491 22.505 12.2683 19.7416 15.2788 19.345L53.4355 14.3187C56.4462 13.9221 59.2079 16.0425 59.6044 19.0548L60.9497 29.2813L11.891 35.7437L10.5455 25.5173Z"
          fill="#EDEFF0"
        />
        <Path
          d="M68.7588 17.5016C69.1351 17.4521 69.4 17.1066 69.3504 16.7301C69.3009 16.3536 68.9557 16.0885 68.5794 16.1381L63.8098 16.7664C63.4335 16.816 63.1686 17.1614 63.2181 17.5379C63.2677 17.9144 63.6129 18.1795 63.9892 18.1299L68.7588 17.5016Z"
          fill="#909A9F"
          stroke="#909A9F"
          strokeWidth="1.40227"
        />
        <Path
          d="M52.5644 5.07001C52.5148 4.69347 52.1696 4.42842 51.7933 4.47799C51.417 4.52756 51.1521 4.87299 51.2016 5.24952L51.8296 10.0219C51.8791 10.3984 52.2243 10.6635 52.6006 10.6139C52.977 10.5643 53.2419 10.2189 53.1923 9.84237L52.5644 5.07001Z"
          fill="#909A9F"
          stroke="#909A9F"
          strokeWidth="1.40227"
        />
        <Path
          d="M63.5429 8.0134C63.774 7.7121 63.7172 7.28043 63.4161 7.04923C63.115 6.81804 62.6835 6.87487 62.4525 7.17617L59.5239 10.995C59.2928 11.2963 59.3496 11.728 59.6507 11.9592C59.9519 12.1904 60.3833 12.1335 60.6143 11.8322L63.5429 8.0134Z"
          fill="#909A9F"
          stroke="#909A9F"
          strokeWidth="1.40227"
        />
        <Path
          d="M55.1763 32.816L18.3823 37.6629C17.6297 37.762 17.0999 38.4529 17.1989 39.2059C17.298 39.959 17.9885 40.4891 18.7411 40.39L55.5351 35.5431C56.2878 35.444 56.8175 34.7531 56.7185 34.0001C56.6194 33.247 55.9289 32.7169 55.1763 32.816Z"
          fill="#EDEFF0"
        />
        <Path
          d="M56.971 46.4513L20.177 51.2981C19.4243 51.3973 18.8945 52.0881 18.9936 52.8412C19.0927 53.5943 19.7831 54.1244 20.5358 54.0252L57.3298 49.1784C58.0824 49.0792 58.6122 48.3884 58.5131 47.6353C58.4141 46.8823 57.7236 46.3522 56.971 46.4513Z"
          fill="#EDEFF0"
        />
        <Path
          d="M58.764 60.0869L21.9699 64.9338C21.2173 65.0329 20.6875 65.7238 20.7866 66.4768C20.8857 67.2299 21.5761 67.76 22.3287 67.6608L59.1228 62.814C59.8754 62.7148 60.4052 62.024 60.3061 61.2709C60.207 60.5179 59.5166 59.9878 58.764 60.0869Z"
          fill="#EDEFF0"
        />
        <Path
          d="M30.6835 41.5911L19.1002 43.117C18.3475 43.2161 17.8178 43.907 17.9168 44.66C18.0159 45.4131 18.7064 45.9432 19.459 45.8441L31.0423 44.3182C31.7949 44.2191 32.3247 43.5282 32.2256 42.7752C32.1265 42.0221 31.4361 41.492 30.6835 41.5911Z"
          fill="#EDEFF0"
        />
        <Path
          d="M32.4763 55.2268L20.893 56.7526C20.1404 56.8518 19.6106 57.5426 19.7097 58.2957C19.8088 59.0487 20.4992 59.5788 21.2518 59.4797L32.8351 57.9538C33.5877 57.8547 34.1175 57.1638 34.0185 56.4108C33.9194 55.6577 33.2289 55.1276 32.4763 55.2268Z"
          fill="#EDEFF0"
        />
        <Path
          d="M34.2711 68.862L22.6878 70.3879C21.9352 70.487 21.4054 71.1779 21.5045 71.9309C21.6036 72.684 22.294 73.2141 23.0466 73.1149L34.6299 71.5891C35.3825 71.4899 35.9123 70.7991 35.8133 70.046C35.7142 69.293 35.0237 68.7629 34.2711 68.862Z"
          fill="#EDEFF0"
        />
      </Svg>
      <ThemedText>No results for your search!</ThemedText>
      <ThemedText>Try another keyword</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: "auto",
  },
});
