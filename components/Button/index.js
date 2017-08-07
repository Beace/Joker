import React from "react";
import {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";

export default class LoadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }

  onPress = () => {
    this.props.onPress();
  }

  onHideUnderlay = () => {
    this.setState({ pressStatus: false });
  }

  onShowUnderlay = () => {
    this.setState({ pressStatus: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          activeOpacity={1}
          onPress={this.onPress}
          style={this.state.pressStatus ? styles.buttonPress : styles.button}
          onHideUnderlay={this.onHideUnderlay}
          onShowUnderlay={this.onShowUnderlay}
        >
          <Text
            style={
              this.state.pressStatus ? styles.welcomePress : styles.welcome
            }
          >
            {this.props.text}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 12,
    textAlign: "center",
    margin: 10,
    color: "skyblue"
  },
  welcomePress: {
    fontSize: 12,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  },
  button: {
    borderColor: "skyblue",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  buttonPress: {
    borderColor: "skyblue",
    backgroundColor: "skyblue",
    borderWidth: 1,
    borderRadius: 10
  }
});
