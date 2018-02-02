import React from 'react';
import { TouchableOpacity } from 'react-native';
import { List, ListItem, Left, Body, Right, Text, Form } from 'native-base';
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions';


export const SingleItem = ({ item, onItemPress }) => {
    const { name, flag, region, capital } = item;

        return (
            <TouchableOpacity 
                onPress={() => onItemPress(name)}
            >
                <List>
                <ListItem avatar>
                <Left>
                <Form style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image 
                    key={capital}
                    style={{ flex: 1,
                        height: 50,
                        width: 150, 
                    }}
                    source={{ uri: flag }}
                    />
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPost }, dispatch);
};

export default connect(mapDispatchToProps)(SingleItem);
