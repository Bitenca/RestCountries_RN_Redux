import React, { Component } from 'react';
import {
    Container, Header, Content, Footer, FooterTab, Button,
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

    onButtonSearchPress() {
        const { name } = this.props;
        this.props.fetchPost(name);
        this.loadingPosts(this.props.search);
    }

    searchTermChange(term) {
        if (this.props.name === '') {
            this.props.fetchAllPosts();
            this.loadingPosts(this.props.posts);
            // if search bar is empty render all countries
        }
        this.props.searchStart(term);
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

    renderCountries(posts, search) {
        console.log(this.props.name);
        if (this.props.name === undefined || this.props.name === '') {
            return this.loadingPosts(posts);
        }
        return this.loadingPosts(search);
    }

    render() {
        const { posts, name, search } = this.props;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input
                            value={name}
                            onChangeText={this.searchTermChange.bind(this)}
                            placeholder="Pesquisar"
                        />
                        <Button transparent iconRight onPress={this.onButtonSearchPress.bind(this)}>
                            <Icon name='arrow-forward' />
                        </Button>
                    </Item>
                </Header>
                <Content>
                    {this.renderCountries(posts, search)}
                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#043c96' }}>
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
    return {
        posts: state.posts.all,
        search: state.posts.search,
        name: state.posts.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchAllPosts, fetchPost, searchStart }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
