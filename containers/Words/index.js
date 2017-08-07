import React from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import {
  Container,
  Header,
  Body,
  Content,
  Icon,
  Spinner,
  Text,
  Fab
} from "native-base";
import Card from "../../components/Card";

const API =
  "http://jisuxhdq.market.alicloudapi.com/xiaohua/text?pagesize=10&sort=rand&pagenum=1";

export default class Words extends React.Component {
  state = {
    list: [],
    loading: false,
    active: false
  };
  componentDidMount() {
    this.loadRandom();
  }

  loadRandom = () => {
    const { active } = this.state;
    this.setState({
      loading: true,
      action: !active
    });

    fetch(API, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "APPCODE a7962ad7dc794ca69e2c71eb2a3cdda3"
      }
    })
      .then(res => res.json())
      .then(data => {
        const list = data.result.list;
        this.setState({
          list,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true
        });
      });
  };
  render() {
    const { loading, list, active } = this.state;
    return (
      <Container style={styles.body}>
        <Content>
          {loading
            ? <Spinner color="#5067FF" />
            : <ScrollView style={styles.scrollView}>
                {list.map((item, index) =>
                  <Card data={item} index={index} key={index} />
                )}
              </ScrollView>}
        </Content>

        <Fab
          active={this.state.active}
          direction="up"
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="refresh" onPress={this.loadRandom} />
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5
  },
  scrollView: {
    backgroundColor: "#f9f9f9"
  }
});
