import _ from 'lodash';
import React, { Component } from 'react';
import {
  Container, Content, Footer, FooterTab, Button, Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { availFetch } from '../../actions';
import ListCountry from '../ListCountry';


class UserCountries extends Component {
  componentWillMount() {
    this.props.availFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ countries }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRows(countries);
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

  renderRow(country) {
    return <ListCountry country={country} />;
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Content>
          <ListView
            enableEmptySections
            dataSource={this.DataSource}
            renderRow={this.renderRow}
          />
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: '#043c96' }}>
            <Button onPress={() => this.navigation('homePage')}>
              <Icon name="apps" />
            </Button>
            <Button disabled>
              <Icon active name="star" />
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

const mapStateToProps = state => {
  const countries = _.map(state.countries, (val, uid) => {
    return { ...val, uid };
  });

  return { countries };
};

export default connect(mapStateToProps, { availFetch })(UserCountries);

