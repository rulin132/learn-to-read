import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Image
            source={require("./../images/logo.png")}
            style={[styles.logo]}
          />
        </View>
        <View style={{ flex: 2, backgroundColor: "skyblue" }}>
          <Text>Herd be game</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: "steelblue" }} />
        {/* <Button  style={styles.button} title="Play" onPress={() => Alert.alert("Start Game")} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {},
  button: {}
});
