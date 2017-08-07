import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HTMLView from 'react-native-htmlview';

import photo from "../../static/images/photo.jpg";

export default class Card extends React.Component {
  render() {
    const { data, index } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.header}>
            <Image source={photo} style={styles.icon} />
            <Text style={styles.addtime}>
              {data.addtime}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.content}>
            {data.content}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 50,
    backgroundColor: "#f0f0f0"
  },
  time: {
    color: "#ccc",
    fontSize: 12,
    lineHeight: 30
  },
  addtime: {
    lineHeight: 30,
    justifyContent: "center",
    color: "#ccc",
    fontSize: 12
  },
  content: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 1.5
  }
});
