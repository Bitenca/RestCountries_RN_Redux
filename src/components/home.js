import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button,
Icon, Item, Input
 } from 'native-base';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { fetchAllPosts } from '../actions';
import { Spinner } from './common/Spinner';
import { SingleItem } from './SingleItem';

class Home extends Component {
    componentDidMount() {
        this.props.fetchAllPosts();
    }

    onItemPress(name) {
        Actions.ratePage({ postId: name });
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

    loadingPosts(posts) {
       if (posts) {
        const postItems = posts.data.map((post, i) => {
            return (<SingleItem key={i} item={post} onItemPress={this.onItemPress} />);
        });

        return (
            <ScrollView>
                {postItems}
            </ScrollView>
        );   
    }
        return (<Spinner />);
    }

    render() {
        const { posts } = this.props;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Pesquisar" />
                    <Button transparent>
                        <Icon name="arrow-round-forward" />
                    </Button>
                    </Item>
                </Header>
                <Content>
                    {this.loadingPosts(posts)}
                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: 'darkslateblue' }}>
                    <Button disabled>
                        <Icon active name="apps" />
                    </Button>
                    <Button onPress={() => this.navigation('userCountries')}>
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

const mapStateToProps = (state) => {
    return { posts: state.posts.all };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchAllPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
