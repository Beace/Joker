import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Body,
  Fab,
  Tab,
  Tabs,
  TabHeading,
  Text
} from "native-base";

import Words from "../containers/Words";
import Image from "../containers/Image";

export default class Home extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header hasTabs>
          <Body>
            <Title>Hi, Joker!</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Text>Text</Text>
              </TabHeading>
            }
          >
            <Words />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Images</Text>
              </TabHeading>
            }
          >
            <Image />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22
  }
});
