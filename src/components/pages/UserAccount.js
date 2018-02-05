import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Footer, FooterTab,
Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { userFetch } from '../../actions';

class UserAccount extends Component {
  componentWillMount() {
    this.props.userFetch();
  }

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
                <Thumbnail source={{ uri: 'https://www.ucas.com/sites/default/files/styles/square_full/public/default_images/default_avatar.png' }} />
                <Body>
                  <Text>{this.props.email}</Text>
                  <Text note>Usuário Comum</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Rest Countries - Avalie Países! 
                </Text>
                <Text note>App Criado por Felipe Bittencourt (Bitenca on GitHub)</Text>
              </Body>
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

const mapStateToProps = state => {
  const { email } = state.avail;

  return { email };
};

export default connect(mapStateToProps, { userFetch })(UserAccount);
