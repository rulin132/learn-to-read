import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";

import { Asset, Audio } from "expo";
export default class Home extends React.Component {
  render() {
    const { sound, status } = Audio.Sound.create(
      require("./../music/clockwork_clowns.mp3"),
      {
        shouldPlay: true,
        rate: 1.0,
        shouldCorrectPitch: true,
        volume: 1.0,
        isMuted: false,
        isLooping: true
        // // UNCOMMENT THIS TO TEST THE OLD androidImplementation:
        // androidImplementation: 'MediaPlayer',
      }
    );

    return (
      <View style={styles.container}>
        <Image
          style={{
            backgroundColor: "#e67e22",
            flex: 1,
            position: "absolute",
            width: "100%",
            height: "100%",
            justifyContent: "center"
          }}
          source={require("./../images/home-bg.jpg")}
        />
        <View style={{ flex: 1 }} />
        <View style={styles.header}>
          <Image
            source={require("./../images/logo.png")}
            style={[styles.logo]}
          />
        </View>
        <View style={styles.bgBar} />
        <View style={styles.buttonBar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Start Game")}
          >
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  header: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },
  bgBar: {
    flex: 7
  },
  buttonBar: {
    flex: 2,
    alignItems: "center"
  },
  logo: {},
  bottom: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    width: 200,
    borderRadius: 15
  },
  buttonText: {
    color: "white",
    fontSize: 30
  }
});
