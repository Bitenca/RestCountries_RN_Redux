import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button,
Icon, Text, Body, Right, Title, Item, Input
 } from 'native-base';

export default class Home extends Component {
    render() {
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
                <Content />
                <Footer>
                    <FooterTab style={{ backgroundColor: 'darkslateblue' }}>
                    <Button active>
                        <Icon active name="apps" />
                    </Button>
                    <Button>
                        <Icon name="star" />
                    </Button>
                    <Button>
                        <Icon name="person" />
                    </Button>
                    </FooterTab>
                </Footer>
            </Container>
            );
        }
    }

