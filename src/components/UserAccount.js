import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Footer, FooterTab,
Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class UserAccount extends Component {
    render() {
        return (
        <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Footer>
        <FooterTab style={{ backgroundColor: 'darkslateblue' }}>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon name="star" />
          </Button>
          <Button active>
            <Icon active name="person" />
          </Button>
        </FooterTab>
      </Footer>
      </Container>
      );
    }
}
