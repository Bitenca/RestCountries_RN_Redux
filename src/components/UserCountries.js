import React, { Component } from 'react';
import { 
Container, Content, List, ListItem, Footer, FooterTab, Button, Icon,
Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class UserCountries extends Component {
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
          <List>
            <ListItem avatar>
              <Left>
              <Thumbnail 
              source={{ uri: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAgZAAAAJDY3M2NlMTE1LWMwNmMtNGU4OS1iNmIwLWM4OGE0YjE2N2NkNw.png' }}
              />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Footer>
        <FooterTab style={{ backgroundColor: 'darkslateblue' }}>
        <Button onPress={() => this.navigation('homePage')}>
            <Icon active name="apps" />
        </Button>
        <Button disabled>
            <Icon name="star" />
        </Button>
        <Button onPress={() => this.navigation('userPage')}>
            <Icon name="person" />
        </Button>
        </FooterTab>
      </Footer>
      </Container>
    );
  }
}
