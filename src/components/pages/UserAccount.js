import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Footer, FooterTab,
Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class UserAccount extends Component {
  navigation(data) {
    switch (data) {
        case 'userCountries':
            return Actions.userCountries();
        case 'userPage':
            return Actions.userPage();
        case 'homePage':
            return Actions.home();
        default:
            return 0; 
        }
  }

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
        <FooterTab style={{ backgroundColor: '#043c96' }}>
        <Button onPress={() => this.navigation('homePage')}>
            <Icon active name="apps" />
        </Button>
        <Button onPress={() => this.navigation('userCountries')}>
            <Icon name="star" />
        </Button>
        <Button disabled>
            <Icon name="person" />
        </Button>
        </FooterTab>
      </Footer>
      </Container>
      );
    }
}
