import React, { Component } from 'react';
import {
    Container, Content, Footer, FooterTab, Button, Icon,
    Body, H1, H2, H3, Card, CardItem, Form
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Image from 'react-native-remote-svg';
import { ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { fetchPost, availUpdate, availCreate } from '../../actions';
import { Spinner } from '../common/Spinner';

class RatePage extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    onSubmitAvail(rate) {
        const { post } = this.props;
        console.log(rate, post);


        post.data.map((pos) => {
            const { name, flag } = pos;
            return this.props.availCreate({ rate, name, flag });
        });
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
                        <Card>
                            <CardItem>
                                <Body>
                                    <H1
                                        style={{ alignSelf: 'center', alignContent: 'center' }}
                                    >
                                        {pos.name}
                                    </H1>
                                </Body>
                            </CardItem>
                        </Card>

                        <Image
                            style={{
                                flex: 1,
                                height: 200,
                                width: '100%',
                                padding: 10
                            }}
                            source={{ uri: pos.flag }}
                        />
                        <H2
                            style={{ alignSelf: 'center', alignContent: 'center' }}
                        >
                            Capital: {pos.capital}
                        </H2>
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

    rateCountry(rate) {
        return (
            Alert.alert(
                'Confirmar Avaliação',
                `Tem certeza (${rate})?`,
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => this.onSubmitAvail.bind(this)(rate)
                    },
                ],
                { cancelable: false }
            )
        );
    }

    render() {
        const { post } = this.props;
        return (
            <Container>
                <Content>
                    {this.loadingPosts(post)}
                    <Card style={{ paddingTop: 20 }}>
                        <CardItem style={{ backgroundColor: '#043c96' }}>
                            <Body>
                                <H3 style={{ color: 'white' }}> Avaliação: </H3>
                            </Body>
                        </CardItem>
                    </Card>
                    <Form style={{ padding: 20, paddingTop: 30 }}>
                        <Card >
                            <CardItem>
                                <Body style={{ alignContent: 'center', alignSelf: 'center' }}>
                                    <Form
                                        style={{
                                            alignContent: 'center',
                                            alignSelf: 'center',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Button
                                            key={1} transparent icon warning
                                            onPress={() => this.rateCountry('1 estrela')}
                                        >
                                            <Icon active name='star' />
                                        </Button>

                                        <Button
                                            key={2} transparent icon warning
                                            onPress={() => this.rateCountry('2 estrelas')}
                                        >
                                            <Icon active name='star' />
                                        </Button>

                                        <Button
                                            key={3} transparent icon warning
                                            onPress={() => this.rateCountry('3 estrelas')}
                                        >
                                            <Icon active name='star' />
                                        </Button>

                                        <Button
                                            key={4} transparent icon warning
                                            onPress={() => this.rateCountry('4 estrelas')}
                                        >
                                            <Icon active name='star' />
                                        </Button>

                                        <Button
                                            key={5} transparent icon warning
                                            onPress={() => this.rateCountry('5 estrelas')}
                                        >
                                            <Icon active name='star' />
                                        </Button>
                                    </Form>
                                </Body>
                            </CardItem>
                        </Card>
                    </Form>
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
    const { rating } = state.avail;
    return { post: state.posts.selected, rating };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPost, availUpdate, availCreate }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RatePage);
