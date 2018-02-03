import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button,
Icon, Item, Input
 } from 'native-base';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { fetchAllPosts, fetchPost, searchStart } from '../../actions';
import { Spinner } from '../common/Spinner';
import { SingleItem } from './SingleItem';

class Home extends Component {
    componentDidMount() {
        this.props.fetchAllPosts();
    }

    onItemPress(name) {
        Actions.ratePage({ postId: name });
    }

    onSearch(name) {
        this.props.searchStart(name);
        this.props.fetchPost(name);
        this.loadingPosts(this.props.search);
        console.log(this.props.search);
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
        if (!this.props.search) {
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

        return null;
    }

    searchingPosts(posts) {
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
            return null;
    }

    render() {
        const { posts } = this.props;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input 
                        value={this.props.name}
                        onChangeText={this.onSearch.bind(this)}
                        placeholder="Pesquisar" 
                        />
                    </Item>
                </Header>
                <Content>
                    {this.loadingPosts(posts)}
                    {this.searchingPosts(this.props.search)}
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
    return { posts: state.posts.all, 
        search: state.posts.search,
        name: state.posts.name
     };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchAllPosts, fetchPost, searchStart }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
