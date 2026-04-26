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
        <Text>Hello my name is Giret Almonte, I am enrolled in the Digital Media major at UCF.</Text>
        <Text>I am eager to contunie learning and creating designs that I am proud of. </Text>
      </View>
    </ImageBackground>
  );
}
