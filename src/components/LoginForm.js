import React, { Component } from 'react';
import { 
    Container, Content, Form, Item, Input, Thumbnail, 
    Button, Text, H2, Card, Body, CardItem, Header
} from 'native-base';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser, registerUser } from '../actions';
import { styles } from './LoginStyles';
import background from '../../background.jpg';
import { Spinner } from './common/Spinner';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonLoginPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    onButtonRegisterPress() {
        const { email, password } = this.props;

        this.props.registerUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (this.props.error);
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <Form style={styles.layoutStyle}>
                <Button 
                style={styles.buttonStyle} 
                onPress={this.onButtonLoginPress.bind(this)}
                >
                    <Text>
                        Login
                    </Text>
                </Button>

                <Button 
                success 
                style={styles.buttonStyle} 
                onPress={this.onButtonRegisterPress.bind(this)}
                >
                    <Text>
                        Registrar
                    </Text>
                </Button>
            </Form>
        );
    }

    render() {
        const { inputStyle, h2Style, layoutStyle, headerStyle,
        contentContainerStyle, backgroundImage } = styles;
        return (
            <ImageBackground style={backgroundImage} source={background}>
            <Container>
                <Header style={headerStyle}>
                <Text style={styles.footerTextStyle} >Nota: Para registrar um novo usuário, 
                basta inserir as credenciais e selecionar o botão de "Registrar"! </Text>
                </Header>
                <Content contentContainerStyle={contentContainerStyle}>
                <Form style={inputStyle}>
                    <Thumbnail 
                    large source={{ uri: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAgZAAAAJDY3M2NlMTE1LWMwNmMtNGU4OS1iNmIwLWM4OGE0YjE2N2NkNw.png' }}
                    />
                    <H2 style={h2Style}>
                        Rest Countries - Avalie!
                    </H2>
                </Form>

                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Body>
                            <Form style={inputStyle}>
                                <Item>
                                    <Input 
                                    onChangeText={this.onEmailChange.bind(this)}
                                    autoCorrect={false}
                                    placeholder='email' 
                                    keyboardType='email-address'
                                    value={this.props.email}
                                    />
                                </Item>
                            </Form>
                        </Body>
                    </CardItem>
                </Card>

                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Body>
                            <Form style={inputStyle}>
                                <Item>
                                    <Input 
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    placeholder='senha' 
                                    secureTextEntry
                                    value={this.props.password}
                                    />
                                </Item>  
                            </Form>
                        </Body>
                    </CardItem>
                </Card>

                <Text style={styles.errorMessage}>
                    {this.renderError()}
                </Text>

                <Form style={layoutStyle}>
                    {this.renderButton()}
                </Form>

                </Content>
            </Container>
        </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser, registerUser
})(LoginForm);
