import React, { Component } from 'react';
import { 
    Container, Content, List, ListItem, Footer, FooterTab, Button, Icon,
    Left, Body, Right, Thumbnail, Text, H1 } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Image from 'react-native-remote-svg';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { fetchPost } from '../../actions';
import { Spinner } from '../common/Spinner';

class RatePage extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.postId);
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

    loadingPosts(post) {
        if (post) {
            const postItems = post.data.map((pos, i) => {
                return (
                    <TouchableOpacity key={i}>
                    <H1>{pos.name}</H1>
                    <Image 
                    style={{ flex: 1,
                    height: 200,
                    width: '100%',
                    }}
                    source={{ uri: pos.flag }}
                    />
                    <Text>{pos.name}</Text>
                    </TouchableOpacity>
                 );   
            });
    
            return (
                <ScrollView>
                    {postItems}
                </ScrollView>
            );  
        }

         return <Spinner />;
     }

    render() {
        const { post } = this.props;
        console.log(post);
        return (
            <Container>
        <Content>
        {this.loadingPosts(post)}
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
const mapStateToProps = (state) => {
    return { post: state.posts.selected };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RatePage);
