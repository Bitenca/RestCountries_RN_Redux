import React from 'react';
import { TouchableOpacity } from 'react-native';
import { List, ListItem, Body, Right, Text, Left, H1, Form } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../../actions';


export const SingleItem = ({ item, onItemPress }) => {
    const { name, region, capital, alpha3Code } = item;

    return (
        <TouchableOpacity
            onPress={() => onItemPress(name.toString())}
        >
            <List>
                <ListItem avatar>
                    <Left>
                        <Form style={styles.formStyle}>
                            <H1 style={{ color: 'white', alignSelf: 'center', }} >{alpha3Code}</H1>
                        </Form>
                    </Left>
                    <Body>
                        <Text>{name}</Text>
                        <Text note>Localidade Regional: {region}</Text>
                    </Body>
                    <Right>
                        <Text note>Capital:</Text>
                        <Text note>{capital}</Text>
                    </Right>
                </ListItem>
            </List>
        </TouchableOpacity>

    );
};

const styles = {
    formStyle: {
        height: 60,
        width: 80,
        backgroundColor: '#043c96',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPost }, dispatch);
};

export default connect(mapDispatchToProps)(SingleItem);
