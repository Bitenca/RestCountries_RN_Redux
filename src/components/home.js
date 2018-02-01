import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button,
Icon, Text, Body, Right, Title
 } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                <Body>
                    <Title>Rest Countries</Title>
                </Body>
                <Right>
                    <Button danger onPress={() => null}>
                    <Text>Sair</Text>
                    </Button>
                </Right>
                </Header>
                <Content />
                <Footer>
                <FooterTab>
                    <Button vertical>
                    <Icon name="apps" />
                    <Text>Todos os Países</Text>
                    </Button>
                    <Button vertical>
                    <Icon name="search" />
                    <Text>Pesquisar</Text>
                    </Button>
                    <Button vertical active>
                    <Icon active name="star" />
                    <Text>Meus Países</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </Container>
            );
        }
    }

