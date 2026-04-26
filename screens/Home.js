import { View, Text, ImageBackground } from "react-native";
import styles from "../styles";

export default function Home() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to My Portfolio</Text>
        <Text style={styles.subtitle}>
          Frontend Developer | Designer | Problem Solver
        </Text>
         <Text style={styles.subtitle}>
          Hello my name is Giret Almonte, I am currently enrolled in the Digital Media major at UCF.
        </Text>
        <Text style={styles.subtitle}>
          I am very eager to continue learning and creating work that I can be proud of.
        </Text>
      </View>
    </ImageBackground>
  );
}
