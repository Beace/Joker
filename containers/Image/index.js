import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import {
  Container,
  Body,
  Left,
  Content,
  Icon,
  Spinner,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Fab
} from "native-base";

const API =
  "http://jisuxhdq.market.alicloudapi.com/xiaohua/pic?pagesize=20&sort=rand&pagenum=1";
import photo from "../../static/images/photo.jpg";
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
                  <Card key={index}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={photo} />
                        <Body>
                          <Text style={styles.addtime}>
                            {item.addtime}
                          </Text>
                          <Text note style={styles.content}>
                            {item.content}
                          </Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={{
                          uri: item.pic
                        }}
                        style={{
                          width: 400,
                          height: 200,
                          backgroundColor: "#f0f0f0"
                        }}
                      />
                    </CardItem>
                  </Card>
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
  header: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5
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
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 1.5
  },
  body: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5
  }
});
