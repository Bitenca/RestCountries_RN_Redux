import React from 'react';
import { TouchableOpacity } from 'react-native';
import { List, ListItem, Body, Right, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../../actions';


export const SingleItem = ({ item, onItemPress }) => {
    const { name, region, capital } = item;

        return (
            <TouchableOpacity 
                onPress={() => onItemPress(name.toString())}
            >
                <List>
                <ListItem avatar>
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
