import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { List, ListItem, Left, Body, Right, Text, Thumbnail } from 'native-base';
import Image from 'react-native-remote-svg';

export const SingleItem = ({ item, onItemPress }) => {
    const { name, flag, region, capital } = item;

    return (
        <TouchableOpacity 
        onPress={() => onItemPress(name)} 
        >
        <List>
        <ListItem avatar>
        <Left>
        <View>
            <Image 
            key={capital}
            style={{ height: 128, width: 90 }}
            source={{ uri: flag }}
            />
        </View>
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

